// Get references to the dropdown button and content
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownContent = document.getElementById("dropdownContent");

// Toggle the visibility of the dropdown when the button is clicked
dropdownBtn.addEventListener("click", function () {
  dropdownContent.classList.toggle("show");
});

// Update the selected country when an option is clicked
const dropdownItems = document.querySelectorAll(".dropdown-item");
dropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Get the country name from the clicked item and update the button text
    dropdownBtn.textContent = item.textContent.trim();
    // Hide the dropdown menu after selecting
    dropdownContent.classList.remove("show");
  });
});

// Close the dropdown if clicked outside
window.addEventListener("click", function (event) {
  if (!event.target.closest(".custom-dropdown")) {
    dropdownContent.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // ====================
  // Search functionality
  // ====================
  const searchInput = document.querySelector('.search input[type="text"]');
  const categorySelect = document.querySelector(".search select");
  const searchButton = document.querySelector(".search button");

  searchButton.addEventListener("click", function (e) {
    e.preventDefault();
    const query = searchInput.value.trim();
    const category = categorySelect.value;
    if (!query) {
      alert("Please enter a search term.");
      return;
    }
    console.log("Searching for:", query);
    console.log("Category:", category);
    // window.location.href = `/search?query=${encodeURIComponent(query)}&category=${category}`;
  });

  categorySelect.addEventListener("change", function () {
    console.log("Selected category:", this.value);
  });

  // ====================
  // Menu bar selections
  // ====================
  const helpDropdown = document.getElementById("help");
  helpDropdown.addEventListener("change", function () {
    console.log("Help topic selected:", this.value);
  });

  const langCurrencySelect = document.getElementById("lang-currency");
  langCurrencySelect.addEventListener("change", function () {
    console.log("Language & Currency selected:", this.value);
  });

  const flagSelect = document.querySelector(".flag-select");
  flagSelect.addEventListener("change", function () {
    console.log("Shipping country selected:", this.value);
  });

  // ====================
  // Hero section buttons
  // ====================
  const joinBtn = document.querySelector(".btn.join-now");
  const loginBtn = document.querySelector(".btn.login");

  joinBtn.addEventListener("click", function () {
    alert("Redirecting to sign-up page...");
    // window.location.href = '/signup';
  });

  loginBtn.addEventListener("click", function () {
    alert("Redirecting to login page...");
    // window.location.href = '/login';
  });

  // ===========================
  // Deals & Offers (Countdown)
  // ===========================
  // Example countdown timer logic (static example removed, this is dynamic)
  const dealTimer = document.querySelector(".deal-timer");
  if (dealTimer) {
    const targetTime = new Date();
    targetTime.setDate(targetTime.getDate() + 4); // Add 4 days for countdown

    const updateTimer = () => {
      const now = new Date();
      const diff = targetTime - now;

      if (diff <= 0) return;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const timerElements = dealTimer.querySelectorAll(".timer-content h2");
      if (timerElements.length >= 4) {
        timerElements[0].textContent = String(days).padStart(2, "0");
        timerElements[1].textContent = String(hours).padStart(2, "0");
        timerElements[2].textContent = String(minutes).padStart(2, "0");
        timerElements[3].textContent = String(seconds).padStart(2, "0");
      }
    };

    setInterval(updateTimer, 1000);
    updateTimer(); // initial call
  }

  // ====================================
  // Home & Outdoor - "Source Now" Button
  // ====================================
  const sourceNowBtn = document.querySelector(".source-btn");
  sourceNowBtn.addEventListener("click", function () {
    alert("Redirecting to sourcing page...");
    // window.location.href = '/source-now';
  });
});
