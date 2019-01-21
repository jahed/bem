import { generateClassNames } from './generateClassNames'

/**
 * Generates BEM-compliant class names for the given `block` (or `element`) with modifiers.
 */
const bem = (elementName: string, modifiers: Modifiers) => (
  generateClassNames(elementName, modifiers).join(' ')
)

export {
  bem
}
