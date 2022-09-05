const palindromes = function (str) {
    let realStr = str.toLowerCase().replace(/[^a-z]/g, "");
    let reverseStr = realStr.split('').reverse().join('');
    if (realStr === reverseStr){
        return true;
    } else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
