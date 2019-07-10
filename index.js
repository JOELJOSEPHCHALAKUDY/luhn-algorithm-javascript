

// Luhn algorithm to verify the number 
var luhnChk = function (a) {
    return function (c) {
        for (var l = c.length, b = 1, s = 0, v; l;) v = parseInt(c.charAt(--l), 10), s += (b ^= 1) ? a[v] : v;
        return s && 0 === s % 10
    }
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]);

console.log(luhnChk('8965030316120052287'));



// Luhn algorithm to generate check digit 

function getCheckDigit(value) {
    if (/[^0-9-\s]+/.test(value)) return false;

    var nCheck = 0, nDigit = 0, bEven = true;
    value = value.replace(/\D/g, "");

    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n),
            nDigit = parseInt(cDigit, 10);

        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
    }
    return (1000 - nCheck) % 10;
}

console.log(getCheckDigit('896503031612005228'));


