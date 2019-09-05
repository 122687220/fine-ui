const EMAIl_REG = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/

const validatorEmail = msg => (rule, value, callback) => {
  if (EMAIl_REG.test(value)) {
    callback()
  } else {
    callback(new Error(msg))
  }
}

const checkEmail = ({ msg, trigger = ['blur'] }) => {
  return {
    validator: validatorEmail(msg),
    trigger
  }
}

export default checkEmail
