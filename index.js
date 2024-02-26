


function validation()
{
  var name=document.getElementById('name').value;
  var pwd=document.getElementById('pwd').value;
  var phone=document.getElementById('phone').value;
  var email=document.getElementById('email').value;
  var country=document.getElementById('country');


  var namecheck=/[A-Za-z. ]{6,20}$/;
  
  var pwdcheck=/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{10,30}$/;

  var phonecheck=/[789][0-9]{9}$/;

 /* var emailcheck=/[A-Za-z.]{1,}@[A-Za-z]{2,15}[.][A-Za-z]{3,}$/;*/

  
  if(!(namecheck.test(name)))
  {
      alert("UserName must be 6 characters");
      document.getElementById('name').value="";
      document.getElementById('name').focus();
      return false;
  }

  if(!(pwdcheck.test(pwd)))
  {
    alert("password must have 1 uppercase, 1 special symbol and 1 digit");
    document.getElementById('pwd').value="";
    document.getElementById('pwd').focus();
     return false;
  }

  if(!(phonecheck.test(phone)))
  {
    alert("Phone must start with 7,8,9 series with  10 digits");
    document.getElementById('phone').value="";
    document.getElementById('phone').focus();
     return false;
  }

  if(!(emailcheck.test(email)))
  {
    alert("Please insert valid email");
    document.getElementById('email').value="";
    document.getElementById('email').focus();
     return false;
  }

}