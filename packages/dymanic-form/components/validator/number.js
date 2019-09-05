const NUMBER_REG = /^\d+$/

const validatorNumber = msg => (rule, value, callback) => {
  if (NUMBER_REG.test(value)) {
    callback()
  } else {
    callback(new Error(msg))
  }
}

const checkNumber = ({ msg, trigger = ['blur'] }) => {
  return {
    validator: validatorNumber(msg),
    trigger
  }
}

export default checkNumber
