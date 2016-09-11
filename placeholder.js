//Defining a square function

var square = function(x) { // Quantos parametros forem necessarios.
    return x * x;
};                         //Não esquecer o ponto e vírgula.

console.log(square(5));

var makeNoise = function() {
    console.log("Pling!");
};

makeNoise();

var power = function(base, exponent) {
    if (exponent == undefined)
        exponent = 2;
    var result = 1;
    for (var count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 10));
console.log(power(4));

// recursive function
//usually slower, sometimes simpler
//overuse leads to stack troubles
var recurPower = function(base, expoent) {
    if (expoent == 0)
        return 1;
    else
        return base * recurPower(base, expoent - 1);
};

console.log(recurPower(2,3));
