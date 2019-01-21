import { generateClassNames } from './generateClassNames'
import { join } from './join'

/**
 * Generates a `bem`-compliant function which maps the resulting class names to the given
 * `cssModuleLocals` map.
 */
const bemModule = (styles: CSSModule = {}) => (
  (elementName: string, modifiers: Modifiers) => (
    join(
      generateClassNames(elementName, modifiers)
        .map(className => styles[className])
    )
  )
)

export {
  bemModule
}
