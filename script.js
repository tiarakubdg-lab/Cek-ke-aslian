
// LOADING WEBSITE
window.addEventListener("load", function() {
  setTimeout(function() {
    document.getElementById("loader").style.opacity = "0";

    setTimeout(function() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("website").style.display = "block";
    }, 800);

  }, 2200);
});

// CEK KEASLIAN
function cekKeaslian() {
  const nama = document.getElementById("nama").value.trim();
  const kode = document.getElementById("kode").value.trim();
  const hasil = document.getElementById("hasil");

  if (!nama || !kode) {
    hasil.style.color = "#ff6666";
    hasil.innerHTML = "Harap isi nama dan kode transaksi terlebih dahulu!";
    return;
  }

  const pesan = `Halo DHANZZ STORE, saya ingin cek keaslian transaksi.%0A%0ANama: ${encodeURIComponent(nama)}%0AKode: ${encodeURIComponent(kode)}`;

  hasil.style.color = "#ffaaaa";
  hasil.innerHTML = `
    DATA BERHASIL DIKIRIM UNTUK PENGECEKAN.<br>
    Silakan hubungi admin resmi untuk verifikasi.
    <br><br>
    <a href="https://wa.me/6282373139374?text=${pesan}"
       target="_blank"
       style="color:#ff5555;font-weight:bold">
       HUBUNGI ADMIN WHATSAPP
    </a>
  `;
}
