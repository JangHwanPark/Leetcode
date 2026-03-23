/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let res = '';

    while (i >= 0 || j >= 0 || carry > 0){
    const x = i >= 0 ? Number(a[i--]) : 0;
    const y = j >= 0 ? Number(b[j--]) : 0;
    const sum = x + y + carry;
    carry = Math.floor(sum / 2);
    res = (sum % 2) + res;
    console.log(sum, res)
    }

    return res;
};