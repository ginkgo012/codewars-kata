var splitInteger = function(num,parts){
    let remainder = num % parts;
    let division = Math.floor(num / parts);
    let output = Array(parts);

    return output.fill(division,0,parts -remainder).fill(division+1, parts - remainder, parts);
}

console.log(splitInteger(20,3));