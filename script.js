// Menunggu semua elemen HTML dimuat dulu
document.addEventListener("DOMContentLoaded", () => {
  // 1. Ambil elemen-elemen yang kita butuhkan
  const mainContent = document.getElementById("main-content");
  const surpriseContent = document.getElementById("surprise-content");
  const surpriseButton = document.getElementById("surprise-button");
  const backButton = document.getElementById("back-button");

  // 2. Saat tombol "Kejutan" diklik:
  surpriseButton.addEventListener("click", () => {
    // Sembunyikan galeri foto
    mainContent.style.display = "none";
    // Tampilkan bagian kejutan (surat cinta)
    surpriseContent.style.display = "block";
  });

  // 3. Saat tombol "Kembali" diklik:
  backButton.addEventListener("click", () => {
    // Tampilkan lagi galeri foto
    mainContent.style.display = "block";
    // Sembunyikan lagi bagian kejutan
    surpriseContent.style.display = "none";
  });
});
