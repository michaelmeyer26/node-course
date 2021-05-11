const { calculateTip } = require('../src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)

    // if (total !== 13) {
    //     throw new Error('Total tip should be 13, got ' + total)
    // }
})

test('Should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12)
})