function smallestNumber(arr,target){
    var start=0;
    var end=arr.length-1;
    while(start<=end){
        var mid=Math.floor((start+end)/2)
        if(arr[mid]>target){
            end=mid-1;
        }
        if(arr[mid]<target){
            start=mid+1;
        }
        if(arr[mid]==target){
            return arr[start+1]
        }
    }
    return arr[start%end]
}
var arr= ["x","x","y","y"]
var target='z'
console.log(smallestNumber(arr,target));