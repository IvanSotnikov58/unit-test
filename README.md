# unit-test
* 6
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

* 7
  <img width="495" height="144" alt="Screenshot 2026-11-16 125004" src="https://github.com/user-attachments/assets/2a46fe64-d04a-49c3-9daa-331f6612b314" />
<img width="357" height="192" alt="Screenshot 2026-11-16 125014" src="https://github.com/user-attachments/assets/f5205743-3eb5-4f1c-98eb-4d37fb0c5dcb" />
