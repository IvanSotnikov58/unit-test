const { isValidPassword } = require('./password');

test('8 märki on lubatud', () => {
  expect(isValidPassword('abcdefgh')).toBe(true);
})

test('7 märki eba lubatud', () => {
  expect(isValidPassword('abcdefg')).toBe(false);
})

test('9 märki on lubatud', () => {
  expect(isValidPassword('abcdefghi')).toBe(true);
})

test('empty', () => {
  expect(isValidPassword('')).toBe(false);
})

test('only spaces', () => {
  expect(isValidPassword('        ')).toBe(false);
})

test('spaces', () => {
  expect(isValidPassword('salajane parool')).toBe(true);
})

//npm test
;
