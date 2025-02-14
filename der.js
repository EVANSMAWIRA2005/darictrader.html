// Toggle Options Menu
function toggleOptions() {
  const menu = document.getElementById("optionsMenu");
  menu.classList.toggle("active");
}

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  const menu = document.getElementById("optionsMenu");
  const button = document.getElementById("optionsButton");

  if (!menu.contains(event.target) && !button.contains(event.target)) {
      menu.classList.remove("active");
  }
});

// Handle Footer Menu Navigation (About, Services, Help, Contact Us)
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll("section").forEach(section => section.classList.add("hidden"));

  // Show the selected section
  const sectionToShow = document.getElementById(sectionId);
  if (sectionToShow) {
      sectionToShow.classList.remove("hidden");
  }
}

// Handle Click Events for Footer Buttons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".footer-item").forEach(item => {
      item.addEventListener("click", function () {
          const sectionId = this.getAttribute("data-section");
          showSection(sectionId); // Show content in the same page
      });
  });

  // Handle Menu Navigation (New Pages & Home Page Sections)
  document.querySelectorAll(".menu-item").forEach(item => {
      item.addEventListener("click", function () {
          const sectionId = this.getAttribute("data-section");

          // Check if the section should open in a new page
          if (["tradershub", "analysistool", "bots", "classes"].includes(sectionId)) {
              window.location.href = `${sectionId}.html`; // Open in a new page
          } else {
              showSection(sectionId); // Update home page content dynamically
          }
      });
  });
});
// Toggle Options Menu
function toggleOptions() {
  const menu = document.getElementById("optionsMenu");
  menu.classList.toggle("active");
}

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  const menu = document.getElementById("optionsMenu");
  const button = document.getElementById("optionsButton");

  if (!menu.contains(event.target) && !button.contains(event.target)) {
      menu.classList.remove("active");
  }
});

// Show Sections Without Leaving Home Page
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll("section").forEach(section => section.classList.add("hidden"));

  // Show the selected section
  const sectionToShow = document.getElementById(sectionId);
  if (sectionToShow) {
      sectionToShow.classList.remove("hidden");
  }
}

// Handle Click Events for Footer Buttons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".footer-menu li a").forEach(item => {
      item.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent page refresh
          const sectionId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
          showSection(sectionId); // Show content dynamically
      });
  });
});
// Toggle Options Menu
function toggleOptions() {
  const menu = document.getElementById("optionsMenu");
  menu.classList.toggle("active");
}

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  const menu = document.getElementById("optionsMenu");
  const button = document.getElementById("optionsButton");

  if (!menu.contains(event.target) && !button.contains(event.target)) {
      menu.classList.remove("active");
  }
});

// Show Sections Without Leaving Home Page
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll("section").forEach(section => section.classList.add("hidden"));

  // Show the selected section
  const sectionToShow = document.getElementById(sectionId);
  if (sectionToShow) {
      sectionToShow.classList.remove("hidden");
  }
}

// Handle Click Events for Footer Buttons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".footer-menu li a").forEach(item => {
      item.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent page refresh
          const sectionId = this.getAttribute("onclick").match(/'([^']+)'/)[1];
          showSection(sectionId); // Show content dynamically
      });
  });
});








