module.exports = function check(str, bracketsConfig) {
    let brackets = [];

    bracketsConfig.forEach(element => {
        brackets.push(element.join(''));
    });
    for (let i = 0; i < brackets.length; i++) {
        if (str.includes(brackets[i])) {
            str = str.replace(brackets[i], '');
            i = -1;
        }
    }

    if (str.length === 0) {
        return true;
    } else {
        return false;
    }

}