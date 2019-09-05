const TEL_REG = /^((0\d{2,3}-\d{7,8})|(1[123456789]\d{9}))$/

const validatorPhone = msg => (rule, value, callback) => {
  if (TEL_REG.test(value)) {
    callback()
  } else {
    callback(new Error(msg))
  }
}

const checkPhone = ({ msg, trigger = ['blur'] }) => {
  return {
    validator: validatorPhone(msg),
    trigger
  }
}

export default checkPhone
