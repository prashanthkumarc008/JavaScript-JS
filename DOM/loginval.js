function validateForm() {
    let x = document.forms["myForm"]["emailName"].value;
    if (x == "") {
      document.getElementsByTagName("p")[0].innerHTML="Buddy, Please Enter Email ID!!!"
      return false;
    }
    let y = document.forms["myForm"]["passValue"].value;
    if (y == "") {
      document.getElementsByTagName("p")[1].innerHTML="Buddy, Please Enter Passsword!!!"
      return false;
    }
  }