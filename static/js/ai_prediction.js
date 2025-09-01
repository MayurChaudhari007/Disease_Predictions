// document.addEventListener("DOMContentLoaded", function () {
//     const printBtn = document.getElementById("downloadPDF");

//     if (printBtn) {
//         printBtn.addEventListener("click", function (e) {
//             e.preventDefault(); // stop # jump / form submit

//             let printContents = document.getElementById("report").innerHTML;
//             let originalContents = document.body.innerHTML;

//             document.body.innerHTML = printContents;
//             window.print();
//             document.body.innerHTML = originalContents;
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
  const pdfBtn = document.getElementById("downloadPDF");

  if (pdfBtn) {
    pdfBtn.addEventListener("click", function () {
      const reportElement = document.getElementById("report");

      if (!reportElement) {
        alert("Report not found!");
        return;
      }

      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5], // top, left, bottom, right
        filename: "AI_Medical_Report.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true }, // useCORS ensures external CSS/images load
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] }, // prevents cutting sections
      };

      // Use DOM element, not innerHTML
      html2pdf().set(opt).from(reportElement).save();
    });
  }
});
