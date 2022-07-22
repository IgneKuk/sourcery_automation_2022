const isRightTriangle = require('./isRightTriangle');

test('3, 4, 5 is right triangle', () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
});

test('-1, 4, 5 is not right triangle', () => {
    expect(isRightTriangle(-1, 4, 5)).toBe(false);
});

test('0, 4, 5 is not right triangle', () => {
    expect(isRightTriangle(0, 4, 5)).toBe(false);
})

test('A, 4, 5 is not right triangle', () => {
    expect(isRightTriangle('A', 4, 5)).toBe(false);
})

test('1.5, 4, 5 is not right triangle', () => {
    expect(isRightTriangle(1.5, 4, 5)).toBe(false)
})