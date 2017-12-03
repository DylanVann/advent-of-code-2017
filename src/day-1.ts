export const solve = (input: string): number => {
    let sum = 0
    for (let i = 0; i < input.length; i++) {
        const char = input[i]
        const charNext = input[(i + 1) % input.length]
        if (char === charNext) sum += Number(char)
    }
    return sum
}

export const solveHalfway = (input: string): number => {
    let sum = 0
    for (let i = 0; i < input.length; i++) {
        const char = input[i]
        const charNext = input[(i + input.length / 2) % input.length]
        if (char === charNext) sum += Number(char)
    }
    return sum
}
