console.log("conn");

function onFocus(element) {
  element.style.border = "1px solid blue";
}
function onBlur(element) {
  element.style.border = "";
}

function mySubmit() {
  console.log("submit");
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (fname.length > 5) {
    document.getElementById(
      "output"
    ).innerHTML = `<p>First name should not be greater then 5 characters</p>`;
    return;
  }
  //   document.getElementById("output").innerHTML = `<p>your name ${fname}</p>`;
  console.log("submit", { fname, lname, email, password });
}
