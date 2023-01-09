function rainAmount(mm: number) {
	return mm >= 40
		? 'Your plant has had more than enough water for today!'
		: `You need to give your plant ${40 - mm}mm of water`
}

export { rainAmount }
