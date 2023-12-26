const createRangeArray = (first, last) =>
    Array.from(
    { length: (last - first) + 1 },
    (value, index) => first + index 
    );

const fetchMissingNum= (arr) => {
    let rangeArray = createRangeArray(0,arr.length)
    for(let i = 0; i < rangeArray.length ; i++){
       if(!arr.includes(rangeArray[i])){
        return rangeArray[i];
       }
    }
}

let arr1 = [0,1]
console.log("the number missing from [" + arr1 + "] is > "+ fetchMissingNum(arr2));

let arr2 =  [9,6,4,2,3,5,7,0,1]
console.log("the number missing from [" + arr2 + "] is > "+ fetchMissingNum(arr2));

let arr3 = [3,0,1]
console.log("the number missing from [" + arr3 + "] is > "+ fetchMissingNum(arr2));
