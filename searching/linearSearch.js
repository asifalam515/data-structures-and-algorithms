//the function of linear search.
// where we use two parameters.
// arr will takes an array(through which the operation will be held) 
// and a target (which is our targeted value)
function linearSearch(arr,target){ 
    //loop through the whole array
    for(let i=0;i<arr.length;i++){ 
        //will check if the element is the  targeted element or not
        if(arr[i]===target){ 
            //if is it.then it will return the index of the element
            return i; 
        }
    }
    //if we don't find the targeted element 
    // even after checking through all elements,then we will return -1
    return -1;

}

// let's check it out by using some sample test case
const arr=[234,4,67,78,267,2]
const target=0;
console.log(linearSearch(arr,target))