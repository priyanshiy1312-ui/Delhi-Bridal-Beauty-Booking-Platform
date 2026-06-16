document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // OPEN SALON POPUP
  // =========================
  function openPopup(key) {
    const salon = salons[key];

    document.getElementById("popup-title").innerText = salon.name;
    document.getElementById("popup-rating").innerText = salon.rating;
    document.getElementById("popup-location").innerText = salon.location;
    document.getElementById("popup-price").innerText = salon.price;
    document.getElementById("popup-desc").innerText = salon.desc;

    document.getElementById("popup").classList.remove("hidden");
  }

  window.openPopup = openPopup;

  // =========================
  // SEARCH MODAL
  // =========================
  const searchBar = document.getElementById("searchBar");
  const modal = document.getElementById("searchModal");
  const closeModal = document.getElementById("closeModal");

  if (searchBar && modal && closeModal) {

    searchBar.addEventListener("click", () => {
      modal.style.display = "flex";

      setTimeout(() => {
        modal.classList.add("show");
      }, 10);
    });

    function closeSearch() {
      modal.classList.remove("show");

      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    }

    closeModal.addEventListener("click", closeSearch);

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeSearch();
      }
    });
  }

  // =========================
  // BOOK NOW BUTTON (INDEX ONLY)
  // =========================
  const bookBtn = document.getElementById("bookNowBtn");

  if (bookBtn) {
    bookBtn.addEventListener("click", function () {
      window.location.href = "booking.html";
    });
  }

});
const categoryData = {
  bridal: {
    title: "Bridal Beauty",
    desc: "Premium bridal makeup & styling services",
    stats: "500+ Brides Styled",
    bg: "bridal.jpg"
  },
  hair: {
    title: "Hair Styling",
    desc: "Trendy cuts, treatments & styling",
    stats: "1200+ Hair Transformations",
    bg: "hair.jpg"
  },
  makeup: {
    title: "Makeup Artists",
    desc: "Party, bridal & HD makeup experts",
    stats: "900+ Happy Clients",
    bg: "makeup.jpg"
  },
  nails: {
    title: "Nail Art Studio",
    desc: "Luxury nail extensions & designs",
    stats: "700+ Nail Designs",
    bg: "nails.jpg"
  },
  spa: {
    title: "Spa & Wellness",
    desc: "Relax, refresh & rejuvenate",
    stats: "1000+ Sessions Completed",
    bg: "spa.jpg"
  }
};

function openCategory(key) {
  const data = categoryData[key];

  document.getElementById("cat-title").innerText = data.title;
  document.getElementById("cat-desc").innerText = data.desc;
  document.getElementById("cat-stats").innerText = data.stats;

  const modal = document.getElementById("categoryModal");
  const content = document.querySelector(".category-modal-content");

  content.style.backgroundImage =
    `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${data.bg}')`;

  modal.style.display = "flex";

  setTimeout(() => {
    modal.classList.add("show");
  }, 10);
}

function closeCategory() {
  const modal = document.getElementById("categoryModal");
  modal.classList.remove("show");

  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}
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

// OPEN POPUP
function openPopup(key) {
  const s = salonData[key];

  document.getElementById("salonPopup").style.display = "flex";

  document.getElementById("popupName").innerText = s.name;
  document.getElementById("popupAddress").innerText = s.address;
  document.getElementById("popupReviews").innerText = s.reviews;
  document.getElementById("popupServices").innerText = s.services;
  document.getElementById("popupDesc").innerText = s.desc;
}

// CLOSE POPUP
function closePopup() {
  document.getElementById("salonPopup").style.display = "none";
}