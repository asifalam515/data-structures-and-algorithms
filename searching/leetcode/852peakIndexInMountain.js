function peakIndexInMaintainArray(arr){
    var start=0;
    var end=arr.length-1;
    while(start<end){
        var mid=Math.floor((start+end)/2)
        if(arr[mid]>arr[mid+1]){
            //you are in decreasing part of the array
            // this may be the answer,but look at the left
            // this is why end !=mid-1;
            end=mid
        }else{
            // you are in ascending part of the array
            start=mid+1;//we know that arr[mid+1] > arr[mid]
        }
       
    }
     // in the end,start === end and pointing to the largest number because of the 2 checks above
        // start and end are always trying to find max element in the above 2 checks 
        // hence,when they are pointing to the just one element,that is the maximum one because that is what checks say
        // more elaboration  :at every point of time start and end,they have the best possible answer till that  time
        // and if we are saying that only one item is remaining ,hence coz of above line that is the best possible answer
        return start //or return end,both are same
}