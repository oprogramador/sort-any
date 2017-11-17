const expect = require('sort-any/tests/expect');
const sortAny = require('sort-any');

/* eslint-disable sort-keys */

const expected = [
  undefined,
  null,
  false,
  true,
  NaN,
  -Infinity,
  -21,
  -3,
  0,
  5,
  5,
  200,
  Infinity,
  'bar',
  'baz',
  'foo',
  'foo',
  'lorem',
  'lorem ipsum',
  'x',
  Symbol('bar'),
  Symbol('baz'),
  Symbol('foo'),
  Symbol('lorem'),
  Symbol('lorem ipsum'),
  Symbol('x'),
  [],
  [undefined],
  [null],
  [false],
  [true],
  [NaN],
  [-Infinity],
  [-21],
  [-3],
  [0],
  [5],
  [200],
  [Infinity],
  ['bar'],
  ['baz'],
  ['foo'],
  ['lorem'],
  ['lorem ipsum'],
  ['x'],
  [Symbol('bar')],
  [Symbol('bar')],
  [Symbol('baz')],
  [Symbol('foo')],
  [Symbol('lorem')],
  [Symbol('lorem ipsum')],
  [Symbol('x')],
  [1, 5],
  [5, 1],
  [1, 20],
  [20, 1],
  [1, 300],
  [300, 1],
  [1, 'foo'],
  ['foo', 1],
  [2, 3],
  [3, 2],
  [2, 7],
  [2, 7],
  [7, 2],
  [3, 3],
  [3, 4],
  [4, 3],
  [3, 200],
  [200, 3],
  [1, 1, 1],
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
  [1, 2, 40],
  [1, 40, 2],
  [1, 2, 50],
  [1, 3, 3],
  [2, 2, 2],
  [2, 2, 5],
  [1, 2, 3, 4],
  [1, 2, 3, 40],
  {},
  { bar: 1 },
  { bar: 2 },
  { foo: 1 },
  { foo: 2 },
  { bar: 1, foo: 2 },
  { foo: 2, bar: 1 },
  { bar: 2, foo: 1 },
  { foo: 1, bar: 2 },
  { foo: 1, bar: 2 },
  { bar: 1, baz: 2, foo: 3 },
  { bar: 1, foo: 3, baz: 2 },
  { baz: 2, bar: 1, foo: 3 },
  { baz: 2, foo: 3, bar: 1 },
  { foo: 3, bar: 1, baz: 2 },
  { foo: 3, baz: 2, bar: 1 },
  { bar: 1, baz: 2, foo: 4 },
  { bar: 1, foo: 4, baz: 2 },
  { baz: 2, bar: 1, foo: 4 },
  { baz: 2, foo: 4, bar: 1 },
  { foo: 4, bar: 1, baz: 2 },
  { foo: 4, baz: 2, bar: 1 },
  { bar: 1, baz: 3, foo: 3 },
  { bar: 1, foo: 3, baz: 3 },
  { baz: 3, bar: 1, foo: 3 },
  { baz: 3, foo: 3, bar: 1 },
  { foo: 3, bar: 1, baz: 3 },
  { foo: 3, baz: 3, bar: 1 },
  { bar: 2, baz: 2, foo: 3 },
  { bar: 2, foo: 3, baz: 2 },
  { baz: 2, bar: 2, foo: 3 },
  { baz: 2, foo: 3, bar: 2 },
  { foo: 3, bar: 2, baz: 2 },
  { foo: 3, baz: 2, bar: 2 },
  { bar: 1, baz: 2, foo2: 3 },
  { bar: 1, baz2: 2, foo: 3 },
  { bar2: 1, baz: 2, foo: 3 },
  { bar: 1, baz: 2, foo: 3, foo2: 4 },
  { bar: 1, baz: 2, foo: 3, foo2: 5 },
  { bar: 1, baz: 2, foo: 4, foo2: 4 },
];

describe('test', () => {
  it.skip('sorts - case 1', () => {
    const array = [];
    expect(sortAny(array)).to.deep.equal(expected);
  });
});
