import generateClassNames from './generateClassNames'
import join from './join'

function bemModule (styles) {
  return (elementName, modifiers) => (
    join(
      generateClassNames(elementName, modifiers)
        .map(className => styles[className])
    )
  )
}

export default bemModule
