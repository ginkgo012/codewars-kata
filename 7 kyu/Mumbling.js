// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// Note:
// this kata was recently attributed to @mclean, which is false (see his comment). Gosts at Codewars or bad joke? // g964

function accum(s) {
    var s = s.toUpperCase();
    var result = "";
    for (i = 0; i < s.length; i++) {
        //console.log(s[i]);
        if (i != s.length - 1) {
            result = result.concat(s[i] + s[i].toLowerCase().repeat(i) + '-');
        }
        else {
            result = result.concat(s[i] + s[i].toLowerCase().repeat(i));
        }
    }
    return result;

}