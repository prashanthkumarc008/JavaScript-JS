let employees=[{eid:101,ename:'rahul',esal:45500},
    {eid:102,ename:'modi',esal:25000},
    {eid:103,ename:'ananda',esal:30000},

    ]
let createEmployee=(emp)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let flag=true;
            flag?resolve('Data Entered'):reject('Failed')
            employees.push(emp)
            }, 4000)
            
        
    })
}


let displayEmployees=()=>{
setTimeout(()=>{
let rows=""
for(let employee of employees){
rows=rows+`<tr>
            <td>${employee.eid}</td>
            <td>${employee.ename}</td>
            <td>${employee.esal}</td>
         </tr>`
}
document.getElementById('tData').innerHTML=rows
//document.getElementById('tData').innerHTML="GM"
},1000)
}


createEmployee({eid:103,ename:"Priyanka",esal:65000}).then((msg) => {
    console.log(msg);
    displayEmployees();

    
}).catch((err) => {
    console.log(err);
    
});
