/* Write a function defaultArguments. It takes a function as an argument, along with an object containing default values for that function's arguments, and returns another function which defaults to the right values.

You cannot assume that the function's arguments have any particular names.

You should be able to call defaultArguments repeatedly to change the defaults.

function add(a,b) { return a+b;};

var add_ = defaultArguments(add,{b:9});
add_(10); // returns 19
add_(10,7); // returns 17
add_(); // returns NaN

add_ = defaultArguments(add_,{b:3, a:2});
add_(10); // returns 13 now
add_(); // returns 5

add_ = defaultArguments(add_,{c:3}); // doesn't do anything, since c isn't an argument
add_(10); // returns NaN
add_(10,10); // returns 20
HINT: This problem requires using Fuction.prototype.toString() in order to extract a function's argument list */

function defaultArguments(func, params){
    let funcString = func.toString();

    let index1 = funcString.indexOf('(');
    let index2 = funcString.indexOf(')');
    let argumentNames = funcString.slice(index1 + 1, index2).split(',');
    
    var updatedArguments = new Array(argumentNames.length);

    for (i=0; i<argumentNames.length; i++){
        let name = argumentNames[i];
        let passedParam = params[name];
        if ( passedParam ){
            let indexOfArgument = argumentNames.indexOf(name);
            updatedArguments[indexOfArgument] = passedParam;
        }
    }
        return function(){
        var newParams = [...arguments];
        for(i=0; i < updatedArguments.length;i++){
            if(newParams[i]){
                updatedArguments[i] = newParams[i];
            }
        }

        return func.apply(null, updatedArguments);
    }
}


