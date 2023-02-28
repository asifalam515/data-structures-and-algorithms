// Binary Search:
function binarySearch(arr,target){
    var start=0;
    var end=arr.length-1;
    while(start<=end){
        //it will keep running until the end is greater than the start
        let mid=Math.floor((start+end)/2)
        if(arr[mid]===target){
            return mid;
        }
        else if(arr[mid]<target){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
    }
    return -1;
}
const arr=[1,2,4,5,6,7,8,12,14,16]
const target=112;
console.log(binarySearch(arr,target))