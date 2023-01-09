function head<T>(arr: T[]): T {
	const clone = JSON.parse(JSON.stringify(arr))
	return clone[0]
}

function tail<T>(arr: T[]): T[] {
	return arr.slice(1)
}

function init<T>(arr: T[]): T[] {
	return arr.slice(0, arr.length - 1)
}

function last<T>(arr: T[]): T {
	const clone = JSON.parse(JSON.stringify(arr))
	return clone[clone.length - 1]
}

export { head, tail, init, last }
