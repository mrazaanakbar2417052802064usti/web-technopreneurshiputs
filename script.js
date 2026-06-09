document.addEventListener("DOMContentLoaded", () => {
  // === 1. LOGIKA NAVBAR ===
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuIcon.classList.toggle("active");
    });
  }

  // === 2. LOGIKA TYPING NAMA (Home/Tentang Saya) ===
  const typingElement = document.getElementById("typing");
  const nameText = "Muhammad Razaan Akbar";
  let nameIndex = 0;
  let nameIsDeleting = false;

  function typeNameEffect() {
    if (!typingElement) return;

    if (nameIsDeleting) {
      typingElement.innerHTML = nameText.substring(0, nameIndex - 1);
      nameIndex--;
    } else {
      typingElement.innerHTML = nameText.substring(0, nameIndex + 1);
      nameIndex++;
    }

    let speed = 120;
    if (!nameIsDeleting && nameIndex === nameText.length) {
      speed = 2000;
      nameIsDeleting = true;
    } else if (nameIsDeleting && nameIndex === 0) {
      nameIsDeleting = false;
      speed = 500;
    } else if (nameIsDeleting) {
      speed = 60;
    }
    setTimeout(typeNameEffect, speed);
  }

  // === 3. LOGIKA TYPING PMB ===
  const pmbElement = document.getElementById("typing-text");
  const pmbArray = [
    "AYO DAFTAR SEKARANG!!!", 
    "JADI MAHASISWA USTI"
  ]; 
  let pmbArrayIndex = 0;
  let pmbCharIndex = 0;
  let pmbIsDeleting = false;

  function typePmbEffect() {
    if (!pmbElement) return;

    const currentPmbText = pmbArray[pmbArrayIndex];

    if (pmbIsDeleting) {
      pmbElement.textContent = currentPmbText.substring(0, pmbCharIndex - 1);
      pmbCharIndex--;
    } else {
      pmbElement.textContent = currentPmbText.substring(0, pmbCharIndex + 1);
      pmbCharIndex++;
    }

    let pmbSpeed = pmbIsDeleting ? 50 : 100;

    if (!pmbIsDeleting && pmbCharIndex === currentPmbText.length) {
      pmbSpeed = 2000;
      pmbIsDeleting = true;
    } else if (pmbIsDeleting && pmbCharIndex === 0) {
      pmbIsDeleting = false;
      pmbArrayIndex = (pmbArrayIndex + 1) % pmbArray.length;
      pmbSpeed = 500;
    }

    setTimeout(typePmbEffect, pmbSpeed);
  }

  // === 4. LOGIKA MODAL POP-UP DESKRIPSI ===
  const modalDesc = document.getElementById("descModal");
  const btnOpenModal = document.getElementById("btn-open-modal");
  const btnCloseModal = document.getElementById("btn-close-modal");

  if (modalDesc && btnOpenModal && btnCloseModal) {
    btnOpenModal.addEventListener("click", () => {
      modalDesc.style.display = "flex";
    });
    btnCloseModal.addEventListener("click", () => {
      modalDesc.style.display = "none";
    });
    window.addEventListener("click", (event) => {
      if (event.target === modalDesc) {
        modalDesc.style.display = "none";
      }
    });
  }

  // === 5. LOGIKA TYPING PRODUK KAMI ===
  const produkElement = document.getElementById("typing-produk-text");
  const produkText = "Produk Kami";
  let produkIndex = 0;
  let produkIsDeleting = false;

  function typeProdukEffect() {
    if (!produkElement) return;

    if (produkIsDeleting) {
      produkElement.innerHTML = produkText.substring(0, produkIndex - 1);
      produkIndex--;
    } else {
      produkElement.innerHTML = produkText.substring(0, produkIndex + 1);
      produkIndex++;
    }

    let speed = 150;
    if (!produkIsDeleting && produkIndex === produkText.length) {
      speed = 3000;
      produkIsDeleting = true;
    } else if (produkIsDeleting && produkIndex === 0) {
      produkIsDeleting = false;
      speed = 500;
    } else if (produkIsDeleting) {
      speed = 80;
    }
    setTimeout(typeProdukEffect, speed);
  }

  // === 6. LOGIKA MODAL GAMBAR FULL (BARU) ===
  const imageModal = document.getElementById("imageModal");
  const productImage = document.getElementById("product-image");
  const fullImage = document.getElementById("full-image");
  const btnCloseImage = document.getElementById("btn-close-image");

  if (imageModal && productImage && fullImage && btnCloseImage) {
    // Buka gambar saat diklik
    productImage.addEventListener("click", function() {
      imageModal.style.display = "flex";
      fullImage.src = this.src; // Mengambil src dari gambar yang diklik
    });
    // Tutup dengan tanda X
    btnCloseImage.addEventListener("click", () => {
      imageModal.style.display = "none";
    });
    // Tutup kalau klik di luar area gambar
    window.addEventListener("click", (event) => {
      if (event.target === imageModal) {
        imageModal.style.display = "none";
      }
    });
  }

  // JALANKAN SEMUA FUNGSI EFEK TYPING
  typeNameEffect();
  typePmbEffect();
  typeProdukEffect(); 
});