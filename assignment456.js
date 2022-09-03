//assignment:4
//Q:1
/*
function matchHouses(step) {
    a=step === 0 ? 0 : step * 4 + (step + 1);
    console.log(a);
  }
  matchHouses(1);
  */

  //assignment:5
  /*
  class cylinder{
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }
    getvolume(){
        let PI=3.142;
        let volume=PI*this.radius*this.radius*this.height
        console.log(`radius of cylinder is ${this.radius}`);
        console.log(`height of cylinder is ${this.height}`);
        console.log(`volume of cylinder is ${volume}`);
    }
}
class sphere{
    constructor(radius){
        this.radius=radius;
    }
    getvolume(){
        let PI=3.142;
        let volume=4/3*PI*this.radius*this.radius*this.radius;
        console.log(`radius of sphere is ${this.radius}`);
        console.log(`volume of sphere is ${volume}`);
    }
}
class cone{
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }
    getvolume(){
        let PI=3.142;
         let volume=(PI*this.radius*this.radius*this.height)/3;
        console.log(`radius of cone is ${this.radius} and height is ${this.height}`);
        console.log(`volume of cone is ${volume}`);
    }
}

let cylinder1= new cylinder(2,5);
cylinder1.getvolume();

let sphere1=new sphere(2);
sphere1.getvolume();

let cone1=new cone(3,5);
cone1.getvolume();
*/

//assignment:6
//Q:2
/*
function thirdlarge(arr,arr_size){
    if(arr_size<3){
        console.log("invalid input");
        return;
    }
    let first=arr[0];
    for(let i=1;i<arr_size;i++)
    if(arr[i]>first)
    first=arr[i];
    let second=Number.MIN_VALUE;
    for(let i=0;i<arr_size;i++)
    if(arr[i]>second && arr[i]<first)
    second=arr[i];
    let third=Number.MIN_VALUE;
    for(let i=0;i<arr_size;i++)
    if(arr[i]>third && arr[i]<second)
    third=arr[i];
    console.log("the third largest element is",third);
}
let arr=[1,5,88,99,4];
let n=arr.length;
thirdlarge(arr,n);
*/

//Q:3
/*
function dash(num){
    let number=num;
    let str=number.toString();
    let res=[str[0]];
    for(let i=1;i<str.length;i++){
        if((str[i-1]%2===0) && (str[i]%2===0)){
            res.push('-',str[i]);
        }
        else
        {
            res.push(str[i]);
        }
    } 
    console.log(res.join(""));

}
dash(1245364);
*/
//Q:4
