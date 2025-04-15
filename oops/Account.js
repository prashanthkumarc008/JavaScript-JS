class AccountBank{
    acc_Id;
    acc_Name;
    min_Bal=500;
    acc_Bal;
    open_Account(){
        console.log("accont opened");}
    deposit_Amount(){
        console.log("amount deposited");}
    withdrawl(){
        console.log("insufficient amount");}
    get_Bal(){
        console.log("server busy");}
    close_Account(){
        console.log("try next time");}
 }
 let a1=new AccountBank()
 let a2=new AccountBank()
 a1.open_Account();
 a1.withdrawl();
 a1.deposit_Amount();
