var searchRange = function(nums, target) {
    var start=0;
    var end=nums.length-1;
    while(start<=end){
        var mid=Math.floor((start+end)/2)
      
        if(nums[mid]==target){
            return [start,mid]
        }
            if(target>start){
                start=mid+1;
            }else{
                end=mid-1
            }
            
        }
    return [-1,-1]

};
var nums = [1] 
var target = 1
console.log(searchRange(nums,target));

// how did i spent yesterday