function analyze(arr) {
    const average = arr.reduce((total, n) => total + n, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return { average, min, max, length }
};

module.exports = analyze;