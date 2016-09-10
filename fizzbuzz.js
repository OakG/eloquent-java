// FizzBuzz
// print 1 to 100
//display numbers divisible by 3 as Fizz
//display numbers divisible by 5 as buzz

for (var i = 1; i < 101; i++) {
    if (i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz");
    } else if (i%3 === 0) {
        console.log("Fizz");
    } else if (i%5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
