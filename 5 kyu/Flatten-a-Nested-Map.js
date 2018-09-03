/* Write a function that takes a hierarchical map of properties and converts it to a single, flattened map, with the different levels separated by a forward slash ('/').

For example, given an input such as this:

{
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': [1,2,3]
  }
}
return a new map:

{
  'a/b/c': 12,
  'a/b/d': 'Hello World',
  'a/e': [1,2,3]
}
The passed in argument will always be an object, but it may be empty. Make sure to correctly test for Arrays and nulls — they should be left as is in the result. The only property types will be:

true
false
Numbers
Strings
null
Arrays
Functions
Nested Maps
Keys can be any string of characters, excluding the '/' character. */

function flattenMap(map){
    let output = {}
    
    function goToNext(childMap, path){
        if (typeof childMap !== 'object' || Array.isArray(childMap) || childMap == null){
            return output[path] = childMap; 
        }
        
        for (var obj in childMap){
            goToNext(childMap[obj], path == '' ? obj : path + '/' + obj);
        }
    }

    goToNext(map, '');
    return output;
}

var input = {
    'a': {
        'b':{
            'c':12,
            'd':null
        },
        'e':'hello',
        'f': [2,3]
    },
    'g': {
        'd':{
            'c':12,
            'd':null
        },
        'e':'hello',
        'f': [2,3]
    },

}