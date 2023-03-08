var searchInsert = function(arr, target) {
    var start=0;
    var end=arr.length-1;
    while(start<=end){
        var mid=Math.floor((start+end)/2)
        if(arr[mid]===target){
            return mid;
        }
        if(arr[mid]<target){
            start=mid+1;
        } else{
            end=mid-1;
        }
        
       
    }
    return start
    
};
var arr=[1,3,5,6]
console.log(searchInsert(arr,2))