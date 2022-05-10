function printAll(name: string) {
	console.log(`${name} called this function`);
}

function random(num: number) {
	let rand = Math.floor(Math.random() * num);
	return rand;
}
function main() {
	console.log('Main Function');
	printAll('Mex');
	console.log(random(19));
}

main();
