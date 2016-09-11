var countBs = function(string) {
    lim = string.length;
    count = 0;
    for (i = 0; i <= lim; i++) {
        if (string.charAt(i) === "B") {
            count = count + 1;
        }
    }
    return count;
};



var countChar = function(string, char) {
    lim = string.length;
    count = 0;
    for (i = 0; i <= lim; i++) {
        if (string.charAt(i) === char ) {
            count = count + 1;
        }
    }
    return count;
}
