const validatorRange = ({ min, max, minMsg, maxMsg, errorMsg }) => (
  rule,
  value,
  callback
) => {
  if (isNaN(value)) {
    callback(new Error(errorMsg))
    return
  }
  if (min && value.length < min) {
    callback(new Error(minMsg))
    return
  }
  if (max && value.length > max) {
    callback(new Error(maxMsg))
    return
  }
  callback()
}

const checkRange = ({ trigger = ['blur'], ...args }) => {
  return {
    validator: validatorRange(args),
    trigger
  }
}

export default checkRange
