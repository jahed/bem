import { generateClassNames } from './generateClassNames'
import { BEM } from './types'

/**
 * Generates BEM-compliant class names for the given `block` (or `element`) with modifiers.
 */
const bem: BEM = (elementName, modifiers) => (
  generateClassNames(elementName, modifiers).join(' ')
)

export {
  bem
}
