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

<img width="357" height="192" alt="Screenshot 2026-11-16 125014" src="https://github.com/user-attachments/assets/f5205743-3eb5-4f1c-98eb-4d37fb0c5dcb" />
<img width="495" height="144" alt="Screenshot 2026-11-16 125004" src="https://github.com/user-attachments/assets/2a46fe64-d04a-49c3-9daa-331f6612b314" />

* 8

<img width="422" height="224" alt="image" src="https://github.com/user-attachments/assets/bdb0811a-5bf2-4299-b9c0-39ef429e81dd" />

* 9

<img width="390" height="211" alt="image" src="https://github.com/user-attachments/assets/2d3aa011-dc02-4d46-9781-ac73102aa9bb" />

* 16

<img width="363" height="194" alt="image" src="https://github.com/user-attachments/assets/bef09517-18ec-4903-a37b-f6e7d189c4ff" />

* 18
Ühiktest kontrollib, kas programmi väike osa töötab õigesti

test(): määrab testi

expect(): määrab oodatava tulemuse

toBe(): kontrollib, kas tulemus võrdub oodatuga

Expected: oodatav tulemus

Received: tegelikult saadud tulemus

toThrow() kontrollib, kas funktsioon tekitab vea

test.each võimaldab käivitada sama testi mitme erineva väärtusega

npm test käivitab kõik testid

npm run coverage näitab, kui suur osa koodist on testidega kaetud

Red – kirjutatakse test, mis ebaõnnestub

Green – kirjutatakse kood, mis paneb testi läbima

Refactor – parandatakse koodi struktuuri ilma selle tööd muutmata
