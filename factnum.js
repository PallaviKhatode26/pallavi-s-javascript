function factorial(n)
{
let answer=1;


if((n == 0)||(n == 1)){
return answer;
}
else{
    for(var i=n;i>=1;i--)
{
    answer=answer*i;
}return answer;
}
}
let n=5;
answer=factorial(n)
console.log("the factorial of"+n+"is"+answer);