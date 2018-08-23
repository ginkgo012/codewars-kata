/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge. 
Don't forget the space after the closing parentheses!

ALGORITHMSARRAYSSTRINGSLOOPSCONTROL FLOWBASIC LANGUAGE FEATURESFUNDAMENTALSFORMATTINGREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURES */

function createPhoneNumber(numbers) {
    var str1 = numbers.slice(0, 3).join('');
    var str2 = numbers.slice(3, 6).join('');
    var str3 = numbers.slice(6, numbers.length).join('');
    var num = [];
    return `(${str1}) ${str2}-${str3}`
}