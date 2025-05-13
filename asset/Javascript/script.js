function DownloadBroucher() {
    document.getElementById("downloadBtn").addEventListener("click", function () {
        const pdfUrl = "./asset/Brochure/Unetra HR Solutions.pdf"; // Change this to the actual PDF path
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Unetra HR Solutions.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}
DownloadBroucher();