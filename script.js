document.getElementById("maafButton").addEventListener("click", function() {
    document.body.style.background = "linear-gradient(to bottom left, #3498db, #2ecc71)";
});


// document.getElementById("maafButton").addEventListener("click", function() {
//     alert("Terima kasih atas kebaikanmu. Saya berjanji tidak akan mengulangi kesalahan ini 🥺❤️.");

// });
let buttonClicked = false;

function handleButtonClick() {
    if (!buttonClicked) {
        alert("Maaci Banyaa Ayang 🥺. Aku Ndaa Bakaal Ulangin ini Dan jadi Pribadi Yang Lebii Pekaa. Aku Sayaang Ayaang Banyaa Banyaa 🥺❤️");

        var maafButton = document.getElementById("maafButton");
        maafButton.innerHTML = "Maacii Banyaa Ayaang 🥺❤️";

        buttonClicked = true;
    } else {
        
        alert("Terima kasih Kembali Ayaangg 🥺❤️");
    }
    // Tampilkan alert
    

    // Ubah teks pada tombol

}

