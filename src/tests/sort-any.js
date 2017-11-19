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
  it('sorts simple values', () => {
    const simpleExpected = [
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
    ];
    const array = [
      Symbol('lorem'),
      'foo',
      Symbol('baz'),
      'baz',
      200,
      'lorem',
      -3,
      Symbol('x'),
      Infinity,
      'x',
      'foo',
      'bar',
      Symbol('bar'),
      NaN,
      true,
      -Infinity,
      Symbol('foo'),
      false,
      Symbol('lorem ipsum'),
      5,
      5,
      0,
      null,
      'lorem ipsum',
      -21,
    ];
    expect(JSON.parse(JSON.stringify(sortAny(array)))).to.deep.equal(JSON.parse(JSON.stringify(simpleExpected)));
  });

  it.skip('sorts - case 1', () => {
    const array = [
      [-Infinity],
      { baz: 3, bar: 1, foo: 3 },
      [4, 3],
      [2, 7],
      [1, 2, 50],
      { foo: 3, baz: 3, bar: 1 },
      [20, 1],
      [1, 'foo'],
      ['lorem ipsum'],
      [-21],
      { foo: 2 },
      [5],
      undefined,
      [3, 2, 1],
      -Infinity,
      [-3],
      [3, 3],
      [5, 1],
      [2, 1, 3],
      [Infinity],
      { foo: 3, baz: 2, bar: 1 },
      ['lorem'],
      { bar: 1, foo: 3, baz: 3 },
      200,
      [7, 2],
      Symbol('baz'),
      [200],
      [Symbol('baz')],
      [1, 3, 3],
      [2, 7],
      { baz: 3, foo: 3, bar: 1 },
      [3, 2],
      [2, 3, 1],
      [1, 2, 3, 4],
      [3, 1, 2],
      [false],
      [300, 1],
      -3,
      'baz',
      { foo: 1, bar: 2 },
      [undefined],
      [1, 5],
      Infinity,
      { bar: 1, baz: 2, foo: 4, foo2: 4 },
      NaN,
      true,
      [Symbol('x')],
      [2, 2, 5],
      { bar: 2, foo: 3, baz: 2 },
      [1, 2, 3],
      { baz: 2, foo: 3, bar: 2 },
      { bar: 1, foo: 4, baz: 2 },
      { foo: 3, baz: 2, bar: 2 },
      ['baz'],
      [2, 3],
      { bar: 1, foo: 3, baz: 2 },
      [1, 2, 3, 40],
      { foo: 1, bar: 2 },
      [true],
      ['bar'],
      [3, 200],
      { bar: 1, baz2: 2, foo: 3 },
      'lorem',
      { bar: 1, baz: 2, foo: 3, foo2: 4 },
      { foo: 2, bar: 1 },
      'x',
      { bar: 2, baz: 2, foo: 3 },
      [2, 2, 2],
      { foo: 4, baz: 2, bar: 1 },
      { foo: 4, bar: 1, baz: 2 },
      { baz: 2, bar: 1, foo: 4 },
      [1, 2, 40],
      false,
      ['foo'],
      { bar: 1, baz: 3, foo: 3 },
      [NaN],
      [Symbol('bar')],
      -21,
      { foo: 3, bar: 2, baz: 2 },
      [],
      { bar: 1, foo: 2 },
      [1, 40, 2],
      0,
      Symbol('foo'),
      { bar: 2, foo: 1 },
      [1, 3, 2],
      { bar: 1 },
      5,
      Symbol('x'),
      { foo: 3, bar: 1, baz: 2 },
      5,
      Symbol('lorem'),
      { foo: 3, bar: 1, baz: 3 },
      { bar: 1, baz: 2, foo2: 3 },
      'bar',
      { bar: 1, baz: 2, foo: 3 },
      { foo: 1 },
      [3, 4],
      Symbol('bar'),
      [null],
      { bar: 1, baz: 2, foo: 4 },
      { baz: 2, foo: 4, bar: 1 },
      [Symbol('bar')],
      'lorem ipsum',
      [Symbol('lorem ipsum')],
      [Symbol('lorem')],
      Symbol('lorem ipsum'),
      { baz: 2, foo: 3, bar: 1 },
      {},
      [0],
      { baz: 2, bar: 1, foo: 3 },
      ['foo', 1],
      [1, 1, 1],
      [1, 300],
      { baz: 2, bar: 2, foo: 3 },
      { bar2: 1, baz: 2, foo: 3 },
      'foo',
      { bar: 1, baz: 2, foo: 3, foo2: 5 },
      ['x'],
      [1, 20],
      { bar: 2 },
      [Symbol('foo')],
      'foo',
      null,
      [200, 3],
    ];
    expect(sortAny(array)).to.deep.equal(expected);
  });

  it.skip('sorts - case 2', () => {
    const array = [
      { bar: 1, foo: 3, baz: 2 },
      Symbol('baz'),
      -Infinity,
      [20, 1],
      [NaN],
      [5, 1],
      { foo: 3, baz: 2, bar: 1 },
      [Symbol('baz')],
      [1, 5],
      [200],
      [1, 2, 40],
      Symbol('foo'),
      { baz: 2, foo: 3, bar: 1 },
      false,
      Infinity,
      [300, 1],
      200,
      [false],
      'foo',
      { baz: 2, foo: 3, bar: 2 },
      [2, 1, 3],
      [0],
      [4, 3],
      { foo: 4, bar: 1, baz: 2 },
      [Symbol('bar')],
      { foo: 3, bar: 2, baz: 2 },
      { foo: 2, bar: 1 },
      [Symbol('bar')],
      { baz: 3, bar: 1, foo: 3 },
      [7, 2],
      ['lorem ipsum'],
      [1, 'foo'],
      { foo: 2 },
      [2, 2, 5],
      [Symbol('lorem ipsum')],
      [3, 2, 1],
      [Symbol('x')],
      { baz: 2, bar: 1, foo: 4 },
      { bar: 1, baz: 2, foo: 4, foo2: 4 },
      5,
      [1, 40, 2],
      { bar: 1, baz: 2, foo: 3, foo2: 5 },
      { bar: 2, foo: 3, baz: 2 },
      undefined,
      [2, 3, 1],
      { foo: 1, bar: 2 },
      { foo: 3, bar: 1, baz: 3 },
      ['bar'],
      true,
      { baz: 3, foo: 3, bar: 1 },
      [1, 20],
      [3, 1, 2],
      'lorem',
      [1, 2, 3],
      -3,
      [Symbol('foo')],
      { foo: 3, baz: 3, bar: 1 },
      { baz: 2, foo: 4, bar: 1 },
      [1, 3, 2],
      { bar: 1, foo: 2 },
      { foo: 3, bar: 1, baz: 2 },
      { bar: 1, baz: 3, foo: 3 },
      { bar: 1, baz2: 2, foo: 3 },
      [200, 3],
      [5],
      -21,
      [-3],
      null,
      'x',
      [3, 4],
      [1, 2, 50],
      { bar: 1 },
      [1, 3, 3],
      'baz',
      { bar: 1, baz: 2, foo: 4 },
      [undefined],
      0,
      {},
      [],
      ['baz'],
      { bar: 2, baz: 2, foo: 3 },
      ['foo'],
      Symbol('x'),
      { foo: 4, baz: 2, bar: 1 },
      'lorem ipsum',
      [1, 300],
      [3, 3],
      'foo',
      [2, 3],
      [-Infinity],
      { bar: 1, foo: 4, baz: 2 },
      [1, 2, 3, 4],
      ['x'],
      [true],
      [Infinity],
      { bar: 2 },
      { foo: 1, bar: 2 },
      Symbol('lorem'),
      'bar',
      { baz: 2, bar: 2, foo: 3 },
      { bar: 1, baz: 2, foo: 3, foo2: 4 },
      { foo: 3, baz: 2, bar: 2 },
      5,
      Symbol('bar'),
      { bar2: 1, baz: 2, foo: 3 },
      [3, 200],
      [2, 7],
      ['lorem'],
      NaN,
      [2, 7],
      { bar: 2, foo: 1 },
      [null],
      { bar: 1, foo: 3, baz: 3 },
      { bar: 1, baz: 2, foo2: 3 },
      { bar: 1, baz: 2, foo: 3 },
      [2, 2, 2],
      [1, 2, 3, 40],
      [3, 2],
      { foo: 1 },
      [Symbol('lorem')],
      { baz: 2, bar: 1, foo: 3 },
      ['foo', 1],
      [1, 1, 1],
      [-21],
      Symbol('lorem ipsum'),
    ];
    expect(sortAny(array)).to.deep.equal(expected);
  });
});
