/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let c = 0;
    let r = '';

    while(i>=0||j>=0||c>0){
        const x = i >= 0 ? Number(a[i--]) : 0;
        const y = j >= 0 ? Number(b[j--]) : 0;
        const sum = x + y + c;
        c = Math.floor(sum / 2);
        r = (sum % 2) + r;
    }

    return r;
};