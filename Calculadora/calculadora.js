function sumar(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 0;
    }else{
        return a + b;
    }
}

module.exports = sumar