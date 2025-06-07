const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const allpage = document.querySelector(".all-page")

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

async function subscribe() {
    const email = document.getElementById("emailInput").value;

    const response = await fetch("http://localhost:5000/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();
    alert(result.message);
  }

  async function submitEnquiry() {
    const firstName = document.getElementById("firstName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const response = await fetch("http://localhost:5000/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, email, message })
    });

    const result = await response.json();
    alert(result.message);
  }