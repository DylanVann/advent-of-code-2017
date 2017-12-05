import { getSteps } from './day-3'

// 37  36  35  34  33  32  31
// 38  17  16  15  14  13  30
// 39  18   5   4   3  12  29
// 40  19   6   1   2  11  28
// 41  20   7   8   9  10  27
// 42  21  22  23  24  25  26
// 43  44  45  46  47  48  49

//  6  5  4  3  4  5  6
//  5  4  3  2  3  4  5
//  4  3  2  1  2  3  4
//  3  2  1  0  1  2  3
//  4  3  2  1  2  3  4
//  5  4  3  2  3  4  5
//  6  5  4  3  4  5  6

const expected = [0, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 3, 4, 3, 2]

expected.forEach((number, index) =>
    it(`gets the steps for ${index + 1}`,
        () => expect(getSteps(index + 1)).toBe(number)))
