let user={
    uname:"rahul",
    email:"rg@gmail.com",
    loc:'wayand'
}
let details={
    city:"bangalore",
    email:"rrh@pj.com",
    loc:"kerala"
}

let user_detail={...user,...details}
console.log(user_detail);