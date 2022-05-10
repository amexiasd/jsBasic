let fizz = 3;
let buzz = 5;

const num = 235;

let i = 0;

while (i <= num) {
	if (i % fizz == 0 && i % buzz == 0) {
		console.log('FizzBuzz');
	} else {
		if (i % fizz == 0) {
			console.log('fizz');
		} else {
			if (i % buzz == 0) {
				console.log('Buzz');
			} else {
				console.log(i);
			}
		}
	}
	i += 1;
}
