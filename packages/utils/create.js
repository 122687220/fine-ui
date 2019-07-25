/**
 * Create a component with common options
 */
import createBasic from './create-basic'
export default function(sfc) {
  sfc.inheritAttrs = false
  return createBasic(sfc)
}
