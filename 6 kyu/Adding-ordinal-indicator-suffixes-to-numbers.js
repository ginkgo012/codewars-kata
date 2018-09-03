function numberToOrdinal(n){
    if (n==0){
        return '0';
    }
    
    var digit = n %10;

    if ( ( n%100 ) / 10 == 1){
        return n+'th';
    }
    else{
        switch(digit){
        case 1:
            return n + 'st';
            break;
        case 2:
            return n + 'nd';
            break;
        case 3:
            return n + 'rd';
            break;
        default:
            return n + 'th';
        
        }
    }
}