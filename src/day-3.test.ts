import { getFirstValueLargerThan, getSteps } from './day-3'

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

// Input and expected output.
const expectedPart2 = [
    [1, 2],
    [3, 4],
    [20, 23],
    [100, 122],
]

// 147  142  133  122   59
// 304    5    4    2   57
// 330   10    1    1   54
// 351   11   23   25   26
// 362  747  806--->   ...

// expectedPart2.forEach(([input, output]) =>
//     it(`gets the first vaue larger than ${input}`,
//         () => expect(getFirstValueLargerThan(input)).toBe(output)))
