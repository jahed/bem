import { bemModule } from './bemModule'

test('should apply modifiers to element name and use style object', () => {
  const styles = {
    'Element': 'Element#hash',
    'Element--boolean': 'Element--boolean#hash',
    'Element--number--1': 'Element--number--1#hash',
    'Element--string--value': 'Element--string--value#hash'
  }

  const bem = bemModule(styles)

  const result = bem('Element', {
    falseBoolean: false,
    undefinedValue: undefined,
    nullValue: null,
    boolean: true,
    number: 1,
    string: 'value',
    doesNotExist: 'value'
  })

  expect(result.split(' ')).toEqual([
    'Element#hash',
    'Element--boolean#hash',
    'Element--number--1#hash',
    'Element--string--value#hash'
  ])
})

test('should not include block if it does not exist', () => {
  const styles = {
    'Element--boolean': 'Element--boolean#hash'
  }

  const bem = bemModule(styles)

  const result = bem('Element', {
    boolean: true
  })

  expect(result).toEqual('Element--boolean#hash')
})

test('should default to empty object for convenience', () => {
  const bem = bemModule()

  const result = bem('Element', {
    boolean: true
  })

  expect(result).toEqual('')
})
