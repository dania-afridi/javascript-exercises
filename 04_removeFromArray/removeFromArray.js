const removeFromArray = function(arr, ...value) {

    if (value.length > 1){
        for(let x=0; x<value.length; x++){
            for(let i=0; i<arr.length; i++){
                if(value[x] === arr[i]){
                    arr.splice(i, 1);
                }
           }
        }
        return arr;
    }
    
   for(let i=0; i<arr.length; i++){
        if(value.includes(arr[i])){
            arr.splice(i, 1);
        }
   }
   return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
