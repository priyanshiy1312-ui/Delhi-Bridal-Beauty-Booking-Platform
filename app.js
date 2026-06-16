document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // SEARCH MODAL
  // =========================
  const searchBar = document.getElementById("searchBar");
  const searchModal = document.getElementById("searchModal");
  const closeSearchBtn = document.getElementById("closeModal");

  if (searchBar && searchModal && closeSearchBtn) {

    searchBar.addEventListener("click", () => {
      searchModal.style.display = "flex";
      setTimeout(() => searchModal.classList.add("show"), 10);
    });

    function closeSearch() {
      searchModal.classList.remove("show");
      setTimeout(() => {
        searchModal.style.display = "none";
      }, 300);
    }

    closeSearchBtn.addEventListener("click", closeSearch);

    window.addEventListener("click", (e) => {
      if (e.target === searchModal) closeSearch();
    });
  }

  // =========================
  // CATEGORY MODAL
  // =========================

  const categoryData = {
    bridal: {
      title: "Bridal Beauty",
      desc: "Premium bridal makeup & styling services",
      stats: "500+ Brides Styled",
      bg: "bridal.jpg"
    },
    hair: {
      title: "Hair Styling",
      desc: "Trendy cuts & treatments",
      stats: "1200+ Transformations",
      bg: "hair.jpg"
    },
    makeup: {
      title: "Makeup Artists",
      desc: "HD, bridal & party makeup",
      stats: "900+ Clients",
      bg: "makeup.jpg"
    },
    nails: {
      title: "Nail Art Studio",
      desc: "Luxury nail designs",
      stats: "700+ Designs",
      bg: "nails.jpg"
    },
    spa: {
      title: "Spa & Wellness",
      desc: "Relax & rejuvenate",
      stats: "1000+ Sessions",
      bg: "spa.jpg"
    }
  };

  window.openCategory = function (key) {
    const data = categoryData[key];
    if (!data) return;

    const modal = document.getElementById("categoryModal");
    const content = document.querySelector(".category-modal-content");

    document.getElementById("cat-title").innerText = data.title;
    document.getElementById("cat-desc").innerText = data.desc;
    document.getElementById("cat-stats").innerText = data.stats;

    content.style.backgroundImage =
      `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${data.bg}')`;

    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("show"), 10);
  };

  window.closeCategory = function () {
    const modal = document.getElementById("categoryModal");
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  };

  // =========================
  // SALON POPUP (FIXED)
  // =========================

  const salonData = {
    luxe: {
      name: "Evara Luxe Bridal Studio",
      address: "📍 South Delhi",
      reviews: "⭐ 4.9 (284 reviews)",
      services: "Bridal Makeup, Hair Styling, Nails",
      desc: "Luxury bridal studio for premium bridal looks."
    },

    blush: {
      name: "Blush & Bloom Studio",
      address: "📍 West Delhi",
      reviews: "⭐ 4.7 (196 reviews)",
      services: "Makeup, Hair Styling",
      desc: "Soft glam bridal beauty experts."
    },

    glow: {
      name: "Urban Glow Studio",
      address: "📍 East Delhi",
      reviews: "⭐ 4.8 (310 reviews)",
      services: "HD Makeup, Party Makeup",
      desc: "Modern bridal transformations."
    },

    meenakshi: {
      name: "Meenakshi Bridal Studio",
      address: "📍 Central Delhi",
      reviews: "⭐ 4.8 (240 reviews)",
      services: "Traditional Bridal Makeup",
      desc: "Classic Indian bridal specialists."
    },

    elle: {
      name: "Elle Beauty Lounge",
      address: "📍 New Delhi",
      reviews: "⭐ 4.9 (215 reviews)",
      services: "Luxury Makeup, Spa",
      desc: "Premium beauty lounge experience."
    }
  };

  window.openPopup = function (key) {
    const s = salonData[key];
    if (!s) return;

    const popup = document.getElementById("salonPopup");
    if (!popup) return;

    popup.style.display = "flex";

    document.getElementById("popupName").innerText = s.name;
    document.getElementById("popupAddress").innerText = s.address;
    document.getElementById("popupReviews").innerText = s.reviews;
    document.getElementById("popupServices").innerText = s.services;
    document.getElementById("popupDesc").innerText = s.desc;
  };

  window.closePopup = function () {
    const popup = document.getElementById("salonPopup");
    if (popup) popup.style.display = "none";
  };

});
document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // ELEMENTS
  // =========================
  const openBtn = document.getElementById("aiBtn");
  const popup = document.getElementById("aiPopup");
  const closeBtn = document.getElementById("closeAi");

  const input = document.getElementById("aiInput");
  const sendBtn = document.getElementById("aiSend");
  const aiBody = document.getElementById("aiBody");

  // Safety check (prevents silent errors)
  if (!openBtn || !popup || !closeBtn || !input || !sendBtn || !aiBody) {
    console.error("AI Popup: Missing elements in HTML");
    return;
  }

  // =========================
  // OPEN POPUP
  // =========================
  openBtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
    input.focus();
  });

  // =========================
  // CLOSE POPUP
  // =========================
  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });

  // Close when clicking outside box
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
    }
  });

  // =========================
  // FAKE AI LOGIC
  // =========================
  function getReply(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("bridal")) {
      return "💍 Try soft glam bridal look with gold + pink tones.";
    }

    if (msg.includes("hair")) {
      return "💇‍♀️ Loose curls or low bun with flowers will look amazing.";
    }

    if (msg.includes("makeup")) {
      return "💄 Go for dewy base, nude lips, and soft shimmer eyes.";
    }

    if (msg.includes("salon")) {
      return "🏆 I suggest checking top-rated salons in South Delhi for bridal looks.";
    }

    return "✨ I can help with bridal, hair, makeup, or salon suggestions!";
  }

  // =========================
  // SEND MESSAGE
  // =========================
  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    // User message
    aiBody.innerHTML += `<p class="ai-msg"><b>You:</b> ${text}</p>`;

    input.value = "";

    // AI response
    setTimeout(() => {
      aiBody.innerHTML += `<p class="ai-msg"><b>AI:</b> ${getReply(text)}</p>`;
      aiBody.scrollTop = aiBody.scrollHeight;
    }, 400);
  }

  sendBtn.addEventListener("click", sendMessage);

  // Enter key support
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

});

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("bookingForm");
  const popup = document.getElementById("confirmPopup");
  const confirmText = document.getElementById("confirmText");
  const closeBtn = document.getElementById("closeConfirm");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const service = document.getElementById("service").value;
    const salon = document.getElementById("salon").value;
    const time = document.getElementById("timeSlot").value;

    confirmText.innerHTML = `
      👤 <b>Name:</b> ${name}<br>
      📞 <b>Phone:</b> ${phone}<br>
      📅 <b>Date:</b> ${date}<br>
      ⏰ <b>Time:</b> ${time}<br>
      💄 <b>Service:</b> ${service}<br>
      🏢 <b>Salon:</b> ${salon}
    `;

    popup.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    form.reset();
  });

});