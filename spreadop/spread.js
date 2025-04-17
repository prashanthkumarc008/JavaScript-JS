let user={
    uname:"rahul",
    email:"rg@gmail.com",
    loc:'wayand'
}
let details={
    city:"bangalore",
    email:"rrh@pj.com",
    loc:"kerala",
    father_name:"ananda"
}

let user_detail={...user,...details}
console.log(user_detail);