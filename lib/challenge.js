'use strict';

let dec2bin = (dec) => {
    return (dec >>> 0).toString(2);
}

let checkPalindrome = (numString) => {
    return numString.split('').reverse().join('');
}


let result = 0;

for (let i = 0; i < 1000000; i++) {
  let binary = dec2bin(i);
  let iString = i.toString();
  if((iString === checkPalindrome(iString)) && (binary === checkPalindrome(binary))) {
    result += i;
  }
}

//Answer is 872187

module.exports = () => {
  return true;
};
