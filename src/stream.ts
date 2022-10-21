export async function * streamNumbers(len: number, cb: (num: number) => any) {
	for await(const num of Array.from({length: len}, (_v, n) => n + 1)) {
		await new Promise(resolve => {
			setTimeout(resolve, 1000);
		});
		yield cb(num);
		yield '\n';
	}
}