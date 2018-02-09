import bem from './bem'

test('should apply modifiers to element name', () => {
  const result = bem('Element', {
    falseBoolean: false,
    undefinedValue: undefined,
    nullValue: null,
    boolean: true,
    number: 1,
    string: 'value'
  })

  expect(result.split(' ')).toEqual([
    'Element',
    'Element--boolean',
    'Element--number--1',
    'Element--string--value'
  ])
})
