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

// return by itself will return undefined
