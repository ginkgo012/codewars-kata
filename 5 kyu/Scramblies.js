/* Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False */

function scramble(str1, str2) {
    /*  if (str1.length < str2.length){
       return false;
      }
      
      for (i = 0; i < str1.length; i++){
        str2 = str2.replace(str1[i], '');
      }
      
      if (str2 == ''){
        return true;
      }
      else{
        return false;
      }
      */
    var result = false;

    for (var i = 0; i < str2.length; i++) {

        var char = str2[i];
        var pattern = new RegExp(char, "g");

        var numStr2 = str2.match(pattern).length;
        if (str1.match(pattern)) {
            var numStr1 = str1.match(pattern).length;
        }
        else {
            return false;
        }

        if (numStr1 >= numStr2) {
            result = true;
        }
        else {
            result = false;
            break;
        }
    }
    return result;
}