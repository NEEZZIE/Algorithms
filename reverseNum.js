function reverse(int) {
    return int.split("").reverse().join("");
}
//console.log(reverse("-189"));

function palindrome(str) {
    const data = str.split("").reverse().join("");
    return data === str;
}
console.log(palindrome("noon"));