function pascalTriangleMatrix(n: number) {
	const triMatrix: number[][] = [[1], [1, 1]]

	let triVec: number[] = []
	for (let i = 2; i <= n; i += 1) {
		triVec.push(1)

		for (let j = i - 1; j < triMatrix[i - 1].length; j += 1) {
			for (let k = 1; k < triMatrix[j].length; k += 1) {
				triVec.push(triMatrix[j][k - 1] + triMatrix[j][k])
			}
		}

		triVec.push(1)
		triMatrix.push(triVec)
		triVec = []
	}

	return triMatrix
}

export { pascalTriangleMatrix }
