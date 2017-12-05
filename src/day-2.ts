const parse = (input) => input
    .split('\n')
    .filter(v => !!v)
    .map(row => row
        .split(/\s*\s\s*/)
        .filter(v => v.length)
        .map(v => Number(v)),
    )

export const getRowDifference = (row) => {
    const min = Math.min(...row)
    const max = Math.max(...row)
    return max - min
}

export const checksum = (spreadsheet: string) => parse(spreadsheet)
    .reduce((acc, row) => {
        return acc + getRowDifference(row)
    }, 0)

export const getRowFactorDivision = (row) => {
    let number = 0
    let factor = 0
    let foundFactor = false
    for (let i = 0; i < row.length; i++) {
        number = row[i]
        for (let j = i + 1; j < row.length; j++) {
            factor = row[j]
            foundFactor = number % factor === 0 || factor % number === 0
            if (foundFactor) break
        }
        if (foundFactor) break
    }
    if (factor % number === 0) return factor / number
    return number / factor
}

export const checksumFactors = (spreadsheet: string) => parse(spreadsheet)
    .reduce((acc, row) => {
        return acc + getRowFactorDivision(row)
    }, 0)
