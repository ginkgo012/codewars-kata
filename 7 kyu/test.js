function defaultArguments(func, params) {
    let funcString = func.toString();
    
    // get the names of the arguments in func
    let index1 = funcString.indexOf('(');
    let index2 = funcString.indexOf(')');
    let argumentNames = funcString.slice(index1 + 1, index2).split(',');
    // new array to store the updated arguments for function
    var updatedArguments = new Array(argumentNames.length);
    
    
    if (!this.argNames || argumentNames[0] !== '') {
        this.argNames = argumentNames;
      }


    // parse params of defaultArguments
    for (i = 0; i < argumentNames.length; i++){
      let name = argumentNames[i];
      let passedParam = params[name];
      if( passedParam ){
        let indexOfArgument = argumentNames.indexOf(name);
        updatedArguments[indexOfArgument] = passedParam;
      }
    }
    
    return function() {
        // var args = Array.prototype.slice.call(arguments);
        var args = [...arguments];
        console.log(args);
        for (i=0; i < args.length; i++){
          if (args[i]){
              console.log(args[i]);
            updatedArguments[i] = args[i];
          }
        }
      // if there are more than one parameters

      
      return func.apply(null, updatedArguments);
    }
    
  }
  function add(a,b) { return a+b; }
var add_ = defaultArguments(add,{b:9});
var x = add_(10, 5);
console.log(x)

var add_ = defaultArguments(add_,{b:3});
var y = add_(10, 5);
console.log(y)