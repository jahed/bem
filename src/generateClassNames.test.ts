import { generateClassNames } from './generateClassNames'

test('should apply modifiers to element name', () => {
  const result = generateClassNames('Element', {
    falseBoolean: false,
    undefinedValue: undefined,
    nullValue: null,
    boolean: true,
    number: 1,
    string: 'value'
  })

  expect(result).toEqual([
    'Element',
    'Element--boolean',
    'Element--number--1',
    'Element--string--value'
  ])
})
