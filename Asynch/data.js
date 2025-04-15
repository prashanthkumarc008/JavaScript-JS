let employees=[{eid:101,ename:'rahul',esal:45500},
                {eid:102,ename:'modi',esal:25000},
                {eid:103,ename:'ananda',esal:30000},

                ]
let createEmployee=(emp)=>{
    setTimeout(() => {
        employees.push(emp)
    }, 4000);
}

let displayEmployees=()=>{
    setTimeout(() => {
        let rows=''
        for(let employee of employees){
            <td>${employee.eid}</td>
            <tr>${employee.ename}</tr>
            <tr>${employee.esal}</tr>

        }
        document.getElementById(t_data).innerHTML="gm"
    }, 1000);
}