function linearSearch(arr,target){ //the function of linear search.where we use two parameters.arr will takes an array(through which the operation will be held) and a target (which is our targeted value)
    for(let i=0;i<arr.length;i++){ //loop through the whole array
        if(arr[i]===target){ //will check if the element is the  targeted element or not
            return i; //if is it.then it will return the index of the element
        }
    }
    return -1;//if we don't find the targeted element even after checking through all elements,then we will return -1

}

// let's check it out by using some sample test case
const arr=[234,4,67,78,267,2]
const target=0;
console.log(linearSearch(arr,target))