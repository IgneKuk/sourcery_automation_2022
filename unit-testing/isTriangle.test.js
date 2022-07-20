const isTriangle = require('./isTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
    expect(isTriangle(3, 5, 4)).toBe(true);
    expect(isTriangle(5, 4, 5)).toBe(true);

});

test('-1, 4, 5 is not triangle', () => {
    expect(isTriangle(-1, 4, 5)).toBe(false);
});

test('0, 4, 5 is not triangle', () => {
    expect(isTriangle(0, 4, 5)).toBe(false);
})

test('A, 4, 5 is not triangle', () => {
    expect(isTriangle('A', 4, 5)).toBe(false);
})

test('1.5, 4, 5 is triangle', () => {
    expect(isTriangle(1.5, 4, 5)).toBe(true)
})