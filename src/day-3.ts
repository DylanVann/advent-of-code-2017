export const getSteps = (number) => {
    if (number === 1) return 0
    const root = Math.ceil(Math.sqrt(number))
    // 3, 5, 7, 9...
    const ringSize = root % 2 === 0 ? root + 1 : root
    // Steps to get to this ring directly up or down.
    const minStepsForRing = (ringSize - 1) / 2;
    const positionInRing = number - ((ringSize - 2) ** 2)
    // Starting at 0.
    const distanceFromCorner = positionInRing % (ringSize - 1)
    return minStepsForRing + Math.abs(distanceFromCorner - minStepsForRing)
}
