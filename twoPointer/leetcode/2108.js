// is palindrome
function isPalindrome(str){
    let i=0;
    let j=str.length-1;
    while(j>=i){
        // check
        if(str[i]===str[j]){
            i++,
            j--
        }
        else{
            return false
        }
    }
    return true
}


function firstPalindrome(arr){
    let str;
    for(let i=0;i<arr.length;i++){
         str=arr[i] //array এর ইন্ডেক্স হতে একটা একটা করে string এর মধ্যে নিয়ে নেব
         let result=isPalindrome(str)
         if(result){return str}
    }
return ""
}
console.log(firstPalindrome(["abc","car","ada","racecar","cool"]));