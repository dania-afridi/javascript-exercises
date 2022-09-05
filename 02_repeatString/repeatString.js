const repeatString = function(str, num) {
    
    if(str === '' || num === 0){
        return '';
    } else if(num < 0){
        return "ERROR";
    } else if(num === 1){
        return str;
    } else {
        let temp=''
        for(let i=1; i<=num; i++){
            temp+=str
        }
        return temp; 
    }
};

// Do not edit below this line
module.exports = repeatString;

