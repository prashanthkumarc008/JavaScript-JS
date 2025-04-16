let GoGoa=(success,fail)=>{
    let acc_Bal=700;
    if(acc_Bal>1000){
        success("go goa and enjoy")
    }
    else
    {
        fail("go to pg and study")
    }
}

GoGoa((msg)=>{
    console.log(msg)
},
(err)=>{
    console.log(err)
})