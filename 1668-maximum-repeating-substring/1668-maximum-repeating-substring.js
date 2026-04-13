/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let cnt = 0;
    let current = word;

    while (sequence.includes(current)) {
        cnt++;
        current += word;
    }

    return cnt;
};