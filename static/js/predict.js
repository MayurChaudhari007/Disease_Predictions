

const patientNameElement = document.getElementById("pename");
let patientName = patientNameElement ? patientNameElement.textContent.trim() : "Patient";

// console.log(patientName);

document.addEventListener("DOMContentLoaded", function () {
  const pdfBtn = document.getElementById("pdfBtn");

  if (pdfBtn) {
    pdfBtn.addEventListener("click", function () {
      let element = document.getElementById("rep_con");
      let opt = {
        margin: 0.5,
        filename: `${patientName}_Medical_Report.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      };

      html2pdf().set(opt).from(element).save();
    });
  }
});
