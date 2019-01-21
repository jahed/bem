import { generateClassNames } from './generateClassNames'
import { join } from './join'
import { BEM, CSSModule } from './types'

/**
 * Generates a `bem`-compliant function which maps the resulting class names to the given
 * `cssModuleLocals` map.
 */
const bemModule = (styles: CSSModule = {}): BEM => (
  (elementName, modifiers) => (
    join(
      generateClassNames(elementName, modifiers)
        .map(className => styles[className])
    )
  )
)

export {
  bemModule
}
