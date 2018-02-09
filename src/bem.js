import generateClassNames from './generateClassNames'

function bem (elementName, modifiers) {
  return generateClassNames(elementName, modifiers).join(' ')
}

export default bem
