const myform = document.getElementById("signupform");
myform.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents form submission and page reload
  getdetails(); // Now the form data can be processed in JavaScript
});
function getdetails() {
  // Retrieve form data
  const usname = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("pas").value;

  // Log or send the data to the server via fetch
  console.log("Username:", usname);
  console.log("Email:", username);
  console.log("Password:", password);
}

//LOGIN FORM
