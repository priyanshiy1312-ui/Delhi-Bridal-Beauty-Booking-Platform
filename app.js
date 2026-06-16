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