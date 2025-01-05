function getdetailsofhospital() {
  const searchQuery = document.getElementById("chatinput").value.toLowerCase();
  const hospitals = document.querySelectorAll(".hospital-cards");
  hospitals.forEach((hospitalCard) => {
    const hospitalName = hospitalCard
      .querySelector(".Name")
      .textContent.toLowerCase();
    const availableBeds = hospitalCard
      .querySelector(".Beds")
      .textContent.toLowerCase();
    const departments = hospitalCard
      .querySelector(".dep")
      .textContent.toLowerCase();

    if (
      hospitalName.includes(searchQuery) ||
      availableBeds.includes(searchQuery) ||
      departments.includes(searchQuery)
    ) {
      hospitalCard.style.display = "block";
    } else {
      hospitalCard.style.display = "none";
    }
  });
}

const formid = document.getElementById("contact-form");
formid.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Fill all the fields");
  } else {
    alert(`THank you for your question. We will get back to you soon ${name}`);
  }
});
