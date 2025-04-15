let employees=[
    {eid:101,ename:'rahul'},
    {eid:102,ename:'sonia'},
    {eid:103,ename:'modi'},
    {eid:104,ename:'anada'}
]

// for(let emp of employees)
// console.log(emp.ename);
const x=employees;
let i=0;
while(i<=x.length){
    console.log(x[i].ename);
    i=i+1;
}
