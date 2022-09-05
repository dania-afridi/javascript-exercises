const add = function(num1, num2) {
	return parseInt(num1+num2);
};

const subtract = function(num1, num2) {
	return parseInt(num1-num2);
};

const sum = function(arr) {
  if (arr.length === 0){
    return 0;
  }else if(arr.length === 1){
    return arr[0];
  }else{
    let temp =0;
    for (let i=0; i<arr.length; i++){
      temp += arr[i]
    }
    return temp;
  }
};

const multiply = function(arr) {
  let temp = arr[0];
    for (let i=1; i<arr.length; i++){
      temp *= arr[i]
    }
    return temp;

};

const power = function(num, pow) {
  let temp = num;
    for (let i=2; i<=pow; i++){
      temp *= num;
    }
    return temp;	
};

const factorial = function(num) {
  if(num === 0 || num === 1){
    return 1;
  }else if(num === 2){
    return 2;
  }else{
    let temp=1;
    for(let i=num; i>1; i--){
      temp *= i
    }
    return temp;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
