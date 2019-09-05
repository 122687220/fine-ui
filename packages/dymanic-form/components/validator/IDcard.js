const IDCARD_REG = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/

const validatorIDcard = msg => (rule, value, callback) => {
  if (IDCARD_REG.test(value)) {
    callback()
  } else {
    callback(new Error(msg))
  }
}

const checkIDcard = ({ msg, trigger = ['blur'] }) => {
  return {
    validator: validatorIDcard(msg),
    trigger
  }
}

export default checkIDcard
