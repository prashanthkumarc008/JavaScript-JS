function get_Account_Balance(){
    return 10000;
    console.log('gm'); // after return it wont invoke any statement. it is unreachable.
}

let bal=get_Account_Balance()
console.log(bal);
