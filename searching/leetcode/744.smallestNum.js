// didn't solve yet

var nextGreatestLetter = function(letters, target) {
    if(letters.length===1){
        return letters[0]
    }
    var start=0;
    var end=letters.length-1;
    while(start<=end){
        var mid=Math.floor((start+end)/2)
     if(letters[mid]<target){
        start=mid+1;
       } 
       else{
        end=mid-1;
       }
    }
   if(start===letters.length){
    return letters[0]
   }
   else{
    return letters[left]
   }
   
  
   
};
var letters =["c","f","j"]
var target="d"
console.log(nextGreatestLetter(letters,target));