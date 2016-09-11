var countBs = function(string) {
    var lim = string.length;
    var count = 0;
    for (i = 0; i <= lim; i++) {
        if (string.charAt(i) === "B") {
            count = count + 1;
        }
    }
    return count;
};



var countChar = function(string, char) {
    var lim = string.length;
    var count = 0;
    for (i = 0; i <= lim; i++) {
        if (string.charAt(i) === char ) {
            count = count + 1;
        }
    }
    return count;
}
