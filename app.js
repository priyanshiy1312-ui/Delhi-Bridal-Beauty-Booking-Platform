document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // SMOOTH SCROLL (nav links)
  // =========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // =========================
  // AI QUIZ MODAL (CREATED DYNAMICALLY)
  // =========================

  const aiButton = document.querySelector(".secondary-btn");

  if (aiButton) {
    aiButton.addEventListener("click", openQuiz);
  }

 function openQuiz() {
  let step = 0;

  let answers = {
    budget: "",
    wedding: "",
    prep: "",
    priority: ""
  };

  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.innerHTML = `
    <div class="modal-content" id="aiBox">
      <h2>💄 Bridal Assistant</h2>

      <p id="questionText">Hi! I’ll help you find your perfect bridal package ✨</p>

      <div id="options"></div>

      <button id="nextBtn">Start</button>
      <button id="closeModal">Close</button>

      <div id="result"></div>
    </div>
  `;

  document.body.appendChild(modal);

  const questionText = document.getElementById("questionText");
  const options = document.getElementById("options");
  const nextBtn = document.getElementById("nextBtn");

  document.getElementById("closeModal").onclick = () => modal.remove();

  function renderStep() {
    options.innerHTML = "";

    if (step === 0) {
      questionText.innerText = "What is your estimated budget?";
      options.innerHTML = `
        <button onclick="select('budget','basic')">₹10k - ₹20k</button>
        <button onclick="select('budget','premium')">₹20k - ₹40k</button>
        <button onclick="select('budget','luxury')">₹40k+</button>
      `;
      nextBtn.innerText = "Next";
    }

    else if (step === 1) {
      questionText.innerText = "What type of wedding are you planning?";
      options.innerHTML = `
        <button onclick="select('wedding','simple')">Simple</button>
        <button onclick="select('wedding','grand')">Grand</button>
        <button onclick="select('wedding','luxury')">Luxury</button>
      `;
    }

    else if (step === 2) {
      questionText.innerText = "How much pre-bridal preparation do you want?";
      options.innerHTML = `
        <button onclick="select('prep','low')">Basic</button>
        <button onclick="select('prep','medium')">Moderate</button>
        <button onclick="select('prep','high')">Full Care</button>
      `;
    }

    else if (step === 3) {
      questionText.innerText = "What is your priority?";
      options.innerHTML = `
        <button onclick="select('priority','budget')">Budget Friendly</button>
        <button onclick="select('priority','balanced')">Balanced</button>
        <button onclick="select('priority','luxury')">Luxury Experience</button>
      `;
      nextBtn.innerText = "Get Result";
    }

    else {
      showResult();
    }
  }

  window.select = function (key, value) {
    answers[key] = value;
  };

  nextBtn.onclick = () => {
    step++;

    if (step <= 3) {
      renderStep();
    } else {
      showResult();
    }
  };

  function showLoading() {
    questionText.innerText = "Analyzing your preferences... ✨";
    options.innerHTML = "";
    nextBtn.style.display = "none";
  }

  function showResult() {
    showLoading();

    setTimeout(() => {
      let result = "";

      if (answers.budget === "luxury" || answers.priority === "luxury") {
        result = "💎 Luxury Bridal Package";
      } else if (answers.budget === "premium" || answers.wedding === "grand") {
        result = "💄 Premium Bridal Package";
      } else {
        result = "🌸 Basic Bridal Package";
      }

      document.getElementById("aiBox").innerHTML = `
        <h2>✨ Recommendation Ready</h2>
        <h3>${result}</h3>
        <p>Based on your preferences, this package matches your wedding style, budget, and preparation needs.</p>

        <button onclick="window.location.href='booking.html'">
          Proceed to Booking
        </button>

        <button onclick="location.reload()">Try Again</button>
      `;
    }, 1200);
  }

  renderStep();
}
});
// =========================
// PACKAGE MODAL SYSTEM
// =========================

const packageCards = document.querySelectorAll(".package-cards .card");

const packageData = {
  "Basic Bridal Package": {
    title: "Basic Bridal Package",
    services: ["Bridal Makeup", "Basic Hair Styling", "Light Skincare"],
    price: "₹10,000 - ₹20,000",
    suitable: "Small / Simple Weddings"
  },

  "Premium Bridal Package": {
    title: "Premium Bridal Package",
    services: ["Bridal Makeup", "Hair Styling", "Skincare Prep", "Trial Look"],
    price: "₹20,000 - ₹40,000",
    suitable: "Grand Weddings"
  },

  "Luxury Bridal Package": {
    title: "Luxury Bridal Package",
    services: ["HD Bridal Makeup", "Luxury Hair Styling", "Full Pre-Bridal Care", "Personal Stylist"],
    price: "₹40,000+",
    suitable: "Luxury / Destination Weddings"
  }
};

packageCards.forEach(card => {
  card.addEventListener("click", () => {
    const data = packageData[card.innerText];

    if (!data) return;

    const modal = document.createElement("div");
    modal.classList.add("modal");

    modal.innerHTML = `
      <div class="modal-content">
        <h2>${data.title}</h2>

        <p><strong>Price:</strong> ${data.price}</p>
        <p><strong>Best For:</strong> ${data.suitable}</p>

        <p><strong>Services Included:</strong></p>
        <ul>
          ${data.services.map(s => `<li>${s}</li>`).join("")}
        </ul>

        <button id="bookPackage">Book This Package</button>
        <button id="closeModal">Close</button>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("closeModal").onclick = () => modal.remove();

    document.getElementById("bookPackage").onclick = () => {
      window.location.href = "booking.html";
    };
  });
});
let cursor = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  currentX += (mouseX - currentX) * 0.15;
  currentY += (mouseY - currentY) * 0.15;

  cursor.style.left = currentX + "px";
  cursor.style.top = currentY + "px";

  requestAnimationFrame(animateCursor);
}

animateCursor();