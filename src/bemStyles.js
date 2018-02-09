import generateClassNames from './generateClassNames'
import join from './join'

function bemStyles (styles) {
  return (elementName, modifiers) => (
    join(
      generateClassNames(elementName, modifiers)
        .map(className => styles[className])
    )
  )
}

export default bemStyles
