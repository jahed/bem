import { ClassName, Modifiers } from './types'

const generateClassNames = (
  elementName: ClassName,
  modifiers: Modifiers = {}
): ClassName[] => {
  const classes = Object.keys(modifiers)
    .filter(key => !!modifiers[key])
    .map(modifierType => {
      const modifierValue = modifiers[modifierType]
      return typeof modifierValue === 'boolean'
        ? `${elementName}--${modifierType}`
        : `${elementName}--${modifierType}--${modifierValue}`
    })
  classes.unshift(elementName)
  return classes
}

export {
  generateClassNames
}
