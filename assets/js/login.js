function logincheck() {
  let v = document.getElementById( "email" ).value;
  let ps = document.getElementById( "password" ).value;
  if (v == "") {
    alert("Email must be filled out");
    /*return false;*/
  }

  if ( v == "example@example.com" )
  {
    alert( "Enter a valid email" );
    return false;
  }

  if (ps=="") {
    alert("Please enter password")
  }
  if (ps=="" && v=="") {
    alert("All credentials must be filled in")
  }
}