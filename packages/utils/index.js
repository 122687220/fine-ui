import Vue from 'vue'

const isServer = Vue.prototype.$isServer

function isDef(value) {
  return value !== undefined && value !== null
}

function isObj(x) {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

function get(object, path) {
  const keys = path.split('.')
  let result = object

  keys.forEach(key => {
    result = isDef(result[key]) ? result[key] : ''
  })

  return result
}

const camelizeRE = /-(\w)/g
function camelize(str) {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase())
}

function isAndroid() {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase())
}

function range(num, min, max) {
  return Math.min(Math.max(num, min), max)
}

function typeOf(obj) {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}

// deepCopy
function deepCopy(data) {
  const t = typeOf(data)
  let o

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]))
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i])
    }
  }
  return o
}

// 由一个组件，向上找到最近的指定组件
function findComponentUpward(context, componentName) {
  let parent = context.$parent
  let name = parent.$options.name

  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}

export {
  get,
  range,
  isObj,
  isDef,
  isServer,
  camelize,
  isAndroid,
  deepCopy,
  typeOf,
  findComponentUpward
}
