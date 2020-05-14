//program below will tell you whether a word is palindrom 
// or not


//getting stack
const Stack = require('./Stack');

const stack = new Stack();

//inputed word 
var word = "racecar";
var revWord = '';

//using push method from stack class
for(i=0;i<word.length;i++){
    stack.push(word[i]);
}

//below comment below will convert previously pushed character into string
//remove comment and try it


// console.log(stack.toString())


//using push method from stack class
for(i=0;i<word.length;i++){
    revWord += stack.pop()
}

//comparing
if(word === revWord){
    console.log("Palindrome")
}else{
    console.log("Not Palindrome")
} 

