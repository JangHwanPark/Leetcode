/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let i = 0, j = 0, c = 0;
    g.sort((a,b) => a - b);
    s.sort((a,b) => a - b);
    console.log(g)
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            c++;
            i++;
        }
        j++;
    }

    return c;
};