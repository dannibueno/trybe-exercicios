const sum = require('./script');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 5.1 + 6.55 to equal 11.65', () => {
    expect(sum(5.1, 6.55)).toBeCloseTo(11.65);
  });