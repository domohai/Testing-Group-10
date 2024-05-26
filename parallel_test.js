function sum(a, b) {
    for (let i = 0; i < 900000000; ++i) {
        let x = ((a * b * i) / 3) ** i;
        x = x % 11 + b + a + i;
    }
    return a + b;
}

module.exports = {
    sum: sum
};