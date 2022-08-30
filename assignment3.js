//Q;1.pattern
/*
let n = 4; // height of pattern
let string = "";
let count = 1;
// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string += count;
    count++;
  }
  string += "\n";
}
console.log(string);
*/

//Q2.armstrong number
/*
"use strict"
let num=153;
let sum=0;
let temp=num;
console.log("your entered Number is",num);
while(num > 0){
    let rem = num % 10;
    sum = sum+(rem*rem*rem);
    num =parseInt(num/10);
}
if(sum===temp){
    console.log(`the given number ${temp} is Armstrong number`);}
else{
    console.log(`the given number ${temp} is not a Armstrong number`);
}
*/

//Q3. check special numbers
let num=145;
let sum=0;
let number=num;
while(num>0){
    let lastdigit=num%10;
    let fact=factorial(lastdigit);
    sum=sum+fact;
    num=parseInt(num/10);
}
if(number==sum){
    console.log(`the number ${number} is special number`);
}
else
console.log(`the number ${number} is not a special number`);
function factorial(x){
    let fact=1;
    for(let i=1;i<=x;i++){
        fact=fact*i;
    }
    return fact;
}