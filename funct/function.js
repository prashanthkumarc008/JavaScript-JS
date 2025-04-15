function add(a,b,c=1){
    console.log(a+b+c)
}

add(10,20,30)


 function addd(x,y){
    let z=100;
    return x+y+z;

 }

let r1=add(100,120)

function cal_Age(dob_year){
    let cy=new Date().getFullYear();
    return cy-dob_year;
}
let age1=cal_Age(1996)
console.log(age1);
let age2=cal_Age(2000)
console.log(age2);