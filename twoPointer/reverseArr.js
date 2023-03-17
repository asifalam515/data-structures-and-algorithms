let arr=[1,2,3,4,5,6]
function reverseArray(arr){
    var i=0;
    var j=arr.length-1;
    while(i<=j){
        // temp the value
        var temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp;
        i++,
        j--
    }
    return arr;
    
}
console.log(reverseArray(arr));