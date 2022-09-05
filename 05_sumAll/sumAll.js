const sumAll = function(num1, num2) {
    let sum=0;
    const num1isInt = Number.isInteger(num1);
    const num2isInt = Number.isInteger(num2);
    if(num1 <0 || num2<0 || !num1isInt || !num2isInt){
        return 'ERROR'
    }else if(num1<num2){
        for(let i=num1; i<=num2; i++){
            sum += i;
        }
    }else if(num1 > num2){
        for(let i=num2; i<=num1; i++){
            sum += i;
        }
    }else{
        return num1+num2
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
