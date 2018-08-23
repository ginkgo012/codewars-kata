// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

function list(names) {
    var nameArr = names.map(item => item.name);
    if (nameArr.length == 1) {
        return nameArr[0];
    }
    else if (nameArr.length > 1) {
        var str1 = nameArr.slice(0, nameArr.length - 1).join(', ');
        var str2 = " & " + nameArr[nameArr.length - 1];
        var str = str1.concat(str2);
        return str;
    }
    else {
        return '';
    }
}