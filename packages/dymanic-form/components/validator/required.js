// 校验内容不能为空的验证
const checkRequired = ({ msg, trigger = ['blur'] }) => {
  return {
    required: true,
    message: msg,
    trigger
  }
}

export default checkRequired
