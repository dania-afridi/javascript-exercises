const fibonacci = function(num) {
    let series = [1,1,2,3,5,8];
    let isInt = Number.isInteger(num);

    if(!isInt){
        num=parseInt(num);
    }

    if(num<0){
        return "OOPS"
    }else if(series[num-1]){
        return series[num-1];
    }else{
        do{
            series.push(series[series.length-2]+series[series.length-1]);
        }while(!series[num-1]);
        return series[num-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
