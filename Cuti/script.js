function getTodayDate() {
    const today = new Date();
  
    // Get year, month (zero-based), and day
    const year = today.getFullYear();
    const month = today.getMonth(); // January is 0, December is 11
    const day = today.getDate();
  
    // Option 2: "Month DD, YYYY" format
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    const formattedDate = `${day} ${monthNames[month]} ${year}`;
  
    // Return the formatted date string(s)
    return formattedDate; // Or formattedDate2 for "Month DD, YYYY" format
  }

function generatePDF() {
    const img = document.getElementById("image").files[0]; // Mendapatkan file gambar yang dipilih
    const pdf = new jsPDF();

    // Membaca file gambar
    const reader = new FileReader();
    reader.onload = function() {
        const imgData = reader.result;
    };

    reader.readAsDataURL(img);
}

const formulir = document.getElementById("formulir");

formulir.addEventListener("submit", function(event) {
    event.preventDefault();

    const factory = document.getElementById("factory").value;
    const nama = document.getElementById("nama").value;
    const NIK = document.getElementById("NO Coin/NIK").value;
    const Jabatan = document.getElementById("Jabatan").value;
    const Departemen = document.getElementById("Departemen").value;
    const TanggalMasukSebagaiKaryawan = document.getElementById("Tanggal Masuk Sebagai Karyawan").value;
    const AkanAmbilIjin = document.getElementById("Akan ambil ijin").value;
    const JumlahHariCuti = document.getElementById("Jumlah Hari Cuti").value;
    const Keterangan = document.getElementById("Keterangan").value;
    const todaysDate = getTodayDate(); 
    // const TTD = document.getElementById("TTD").files[0];

    // Generate PDF
    const pdf = new jsPDF();

    pdf.setFontSize(16);
    pdf.text(10, 15, "PT.UNGARAN SARI GARMENTS-III");
    pdf.text(10, 25, factory);
    pdf.text(60, 40, "PERMOHONAN PENGAMBILAN CUTI");

    pdf.setFontSize(12);
    pdf.text(20, 50, "Nama");
    pdf.text(90, 50, " : " + nama);
    pdf.text(20, 60, "NO Coin/NIK" + NIK);
    pdf.text(90, 60, " : " + NIK);
    pdf.text(20, 70, "Jabatan");
    pdf.text(90, 70, " : " + Jabatan);
    pdf.text(20, 80, "Departemen");
    pdf.text(90, 80, " : " + Departemen);
    pdf.text(20, 90, "Tanggal Masuk Sebagai Karyawan");
    pdf.text(90, 90, " : " + TanggalMasukSebagaiKaryawan);
    pdf.text(20, 100, "Akan Ambil Ijin");
    pdf.text(90, 100, " : " + AkanAmbilIjin);
    pdf.text(20, 110, "Jumlah Hari Cuti");
    pdf.text(90, 110, " : " + JumlahHariCuti);
    pdf.text(20, 120, "Keterangan");
    pdf.text(90, 120, " : " + Keterangan);
    pdf.text(140, 140, "Pringapus, " + todaysDate);
    pdf.line(94, 51, 190, 51);
    pdf.line(94, 61, 190, 61);
    pdf.line(94, 71, 190, 71);
    pdf.line(94, 81, 190, 81);
    pdf.line(94, 91, 190, 91);
    pdf.line(94, 101, 190, 101);
    pdf.line(94, 111, 190, 111);
    pdf.line(94, 121, 190, 121);
    pdf.setFontSize(12);
    pdf.text(20, 150, "Menyetujui Ka. Bag");
    pdf.text(90, 150, "Supervisor");
    pdf.text(150, 150, "Pemohon");
    pdf.setLineWidth(0.5);
    pdf.line(10, 175, 70, 175);
    pdf.line(80, 175, 125, 175);
    pdf.line(140, 175, 180, 175);
    // if (TTD) {
    //     const reader = new FileReader();
    //     reader.onload = function() {
    //         const imgData = reader.result;
    //         pdf.addImage(imgData, 'JPEG', 148, 155, 30, 30);
    //     };
    //     reader.readAsDataURL(TTD);
    // }
    pdf.setLineWidth(1);
    pdf.line(0, 190, 250, 190);

    pdf.setFontSize(16);
    pdf.text(10, 210, "DIISI OLEH BAGIAN PERSONALIA");
    pdf.setFontSize(12);
    pdf.text(20, 220, "Hak Cuti yang Timbul Th :");
    pdf.text(170, 220, "Hari");
    pdf.text(20, 230, "Cuti yang sudah diambil :");
    pdf.text(170, 230, "Hari");
    pdf.text(20, 240, "Cuti Yang akan Diambil :");
    pdf.text(170, 240, "Hari");
    pdf.text(20, 250, "Sisa Cuti Tahun Ini :");
    pdf.text(170, 250, "Hari");
    pdf.text("Mengetahui", 30, 260);
    pdf.text("Ka. Bag Personalia", 22, 270);
    pdf.text("Dicek Oleh ", 140, 260);
    pdf.text("Petugas ", 143, 270);
    pdf.setLineWidth(0.5);
    pdf.line(70, 220, 165, 220);
    pdf.line(70, 230, 165, 230);
    pdf.line(70, 240, 165, 240);
    pdf.line(60, 250, 165, 250);
    pdf.line(10, 290, 70, 290);
    pdf.line(120, 290, 180, 290);
    pdf.save("formulir.pdf");
});
