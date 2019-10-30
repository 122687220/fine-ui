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

// 柯里化函数 调一个函数，但是不一次将所有参数传给它。这个函数会返回一个函数去接收下一个参数
function curry(fn) {
  // fn可以是任何参数的函数
  const arity = fn.length
  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args)
    }
    return fn.call(null, ...args)
  }
}

// 组合函数
//接收一组函数，返回一个函数，不立即执行函数  组合函数， 将传递给他的函数从左到右组合。
const compose = (...fns) => (...args) =>
  fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0]

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
  findComponentUpward,
  curry,
  compose
}
