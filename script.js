// MEMBUKA DAN MENUTUP MENU
function toggleMenu() {

    document.getElementById("menu").classList.toggle("active");

}


// MENUTUP MENU SAAT LINK DIKLIK
document.querySelectorAll(".menu a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("menu").classList.remove("active");

    });

});


// VALIDASI FORMULIR KONSULTASI
document.getElementById("formKonsultasi")
.addEventListener("submit", function(event) {

    event.preventDefault();

    var nama = document.getElementById("nama").value.trim();

    var email = document.getElementById("email").value.trim();

    var telepon = document.getElementById("telepon").value.trim();

    var pesan = document.getElementById("pesan").value.trim();

    var hasil = document.getElementById("hasil");


    // CEK KOLOM KOSONG
    if (nama == "" || email == "" || telepon == "" || pesan == "") {

        hasil.style.color = "red";

        hasil.innerHTML = "Semua kolom harus diisi!";

        return;

    }


    // CEK EMAIL
    if (!email.includes("@") || !email.includes(".")) {

        hasil.style.color = "red";

        hasil.innerHTML = "Masukkan alamat email yang valid!";

        return;

    }


    // CEK NOMOR TELEPON
    if (!/^[0-9+\-\s]{8,15}$/.test(telepon)) {

        hasil.style.color = "red";

        hasil.innerHTML = "Nomor telepon tidak valid!";

        return;

    }


    // PESAN BERHASIL
    hasil.style.color = "green";

    hasil.innerHTML =
        "Formulir berhasil divalidasi. Terima kasih, " + nama + "!";


    // KOSONGKAN FORMULIR
    document.getElementById("formKonsultasi").reset();

});