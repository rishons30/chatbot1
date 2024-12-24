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
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  console.log(document.getElementById("loginform"));

  const loginForm = document.getElementById("loginform");

  if (loginForm) {
    console.log("Login form found");

    // Add event listener to form
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form submission
      console.log("Form submitted");

      checkDetails();
    });
  } else {
    console.error("Login form not found.");
  }

  function checkDetails() {
    const usernameLogin = document.getElementById("username").value;
    const passwordLogin = document.getElementById("password").value;

    console.log("Login Username:", usernameLogin);
    console.log("Login Password:", passwordLogin);
  }
});
