function orderAgnosticBinarySearch(arr,target){
  var start=0;
 var end=arr.length-1;  
// find whether the array is sorted in ascending or descending
var isAscending=arr[start]<arr[end]

while(start<=end){
    var mid=Math.floor((start+(end-start)/2));
    if(arr[mid]===target){
        return mid;
    }
    if(isAscending){
// ascending orders will be applied here
        if(arr[mid]<target){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
    }
    else{
        // descending orders will be applied here
        if(arr[mid]<target){
            end=mid-1;
        }
        else{
            start=mid+1;
        }
    }
}
return -1;
}

const arr=[10,11,12,14,15,16,17]
const target=17;
console.log(orderAgnosticBinarySearch(arr,target))