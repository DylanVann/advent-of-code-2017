import { checksum, checksumFactors, getRowFactorDivision } from './day-2'

test('it works', () => {
    const input = `
    5 1 9 5
    7 5 3
    2 4 6 8`
    expect(checksum(input)).toBe(18)
})

test('finds factors and divides', () => {
    expect(getRowFactorDivision([5, 9, 2, 8])).toBe(4)
})

test('does factors', () => {
    const input = `
    5 9 2 8
    9 4 7 3
    3 8 6 5`
    expect(checksumFactors(input)).toBe(9)
})