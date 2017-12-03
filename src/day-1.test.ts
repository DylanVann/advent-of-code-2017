import {solve, solveHalfway} from './day-1'

test('it to work', () => {
    expect(solve('1122')).toBe(3)
    expect(solve('1111')).toBe(4)
    expect(solve('1234')).toBe(0)
    expect(solve('91212129')).toBe(9)

    expect(solveHalfway('1212')).toBe(6)
    expect(solveHalfway('1221')).toBe(0)
    expect(solveHalfway('123425')).toBe(4)
    expect(solveHalfway('123123')).toBe(12)
    expect(solveHalfway('12131415')).toBe(4)
})
