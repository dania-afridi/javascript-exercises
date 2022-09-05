const findTheOldest = function(arr) {
    let today = new Date().getFullYear();
    let index=0;

    let personsAge;
    let currentAge;

    if(arr[index].yearOfDeath){
        personsAge =arr[index].yearOfDeath-arr[index].yearOfBirth;
    }else{
        personsAge = today - arr[index].yearOfBirth;
    }
    
    for(let i=1; i<arr.length; i++){
        if(arr[i].yearOfDeath){
            currentAge =arr[i].yearOfDeath-arr[i].yearOfBirth;
        }else{
            currentAge = today -arr[i].yearOfBirth;
        }

        if(personsAge < currentAge){
            index=i;
            personsAge = currentAge;
        }
    }

    return arr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
