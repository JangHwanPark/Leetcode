/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    console.log(bills.length);
    console.log(bills.length - 1);
    const coins = {
        "five": 0,
        "ten": 0,
        "twelve": 0
    };

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            coins.five++;
        }

        else if (bills[i] === 10) {
            coins.ten++;
            coins.five--;

            if (coins.five < 0) return false;
        }

        else if (bills[i] === 20) {
            if (coins.ten > 0) {
                coins.ten--;
                coins.five--;
            } else {
                coins.five -= 3;
            }
        }

        if (coins.five < 0) return false;
    }

    return true;
};