import { join } from './join'

test('joins classNames with whitespace', () => {
  expect(join('A', 'B')).toEqual('A B')
})

test('joins array of classNames with whitespace', () => {
  expect(join(['A', 'B'])).toEqual('A B')
})

test('ignores falsy values', () => {
  expect(join(['A', 'B', undefined, 'C', false, 'D', null, 'E'])).toEqual('A B C D E')
})
