let str='madam'
const isPalindrome=(str)=>{
    var i=0;
    var j=str.length-1;
    while(j>=i){
        if(str[i]===str[j]){
          i++;
          j--
        }
        else{
            return false;
        }
    }
    return true;
}
console.log(isPalindrome(str));