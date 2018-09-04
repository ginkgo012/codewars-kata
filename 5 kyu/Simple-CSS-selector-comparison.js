function compare(a, b) {
    var specificity = (cssString) => {
        var cssString = cssString.replace('*','');
        
        var idPattern = /[#]/g;
        var classPattern = /[.]/g;

        var numberOfId = cssString.match(idPattern) ? cssString.match(idPattern).length : 0;
        var numberOfClass = cssString.match(classPattern) ? cssString.match(classPattern).length : 0;
        var numberOfItems = cssString.replace(idPattern, ' ').replace(classPattern, ' ').split(/[\s]+/).filter(x => x).length;
        var numberOfTagname = numberOfItems - numberOfId - numberOfClass;
        return [numberOfId, numberOfClass, numberOfTagname];
    }

    var specificityOfA = specificity(a);
    var specificityOfB = specificity(b);
    var output = b;
    for (let i = 0; i < 3; i++) {
        if (specificityOfA[i] > specificityOfB[i]) {
            output = a;
            break;
        }
        else if (specificityOfA[i] < specificityOfB[i]){
            output = b;
            break;
        }
    }
    return output;
}
