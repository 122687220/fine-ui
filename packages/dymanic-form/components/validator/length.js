const validatorLength = ({ min, max, minMsg, maxMsg }) => (
  rule,
  value,
  callback
) => {
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

const checkLength = ({ trigger = ['blur'], ...args }) => {
  return {
    validator: validatorLength(args),
    trigger
  }
}

export default checkLength
