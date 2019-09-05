const URL_REG = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i

const validatorUrl = msg => (rule, value, callback) => {
  if (URL_REG.test(value)) {
    callback()
  } else {
    callback(new Error(msg))
  }
}

const checkUrl = ({ msg, trigger = ['blur'] }) => {
  return {
    validator: validatorUrl(msg),
    trigger
  }
}

export default checkUrl
