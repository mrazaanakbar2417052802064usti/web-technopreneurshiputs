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

  // === 2. LOGIKA TYPING NAMA (Untuk Home/Tentang Saya) ===
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

  // === 3. LOGIKA TYPING PMB (Hanya 2 Kalimat) ===
  const pmbElement = document.getElementById("typing-text");
  const pmbArray = [
    "AYO DAFTAR SEKARANG!!!", 
    "JADI MAHASISWA USTI"
  ]; // Kalimat teknopreneur sudah dihapus
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

  // JALANKAN SEMUA FUNGSI
  typeNameEffect();
  typePmbEffect();
});