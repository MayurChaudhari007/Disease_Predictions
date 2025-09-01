// document.addEventListener("DOMContentLoaded", function () {
//     const printBtn = document.getElementById("printBtn");

//     if (printBtn) {
//         printBtn.addEventListener("click", function (e) {
//             e.preventDefault(); // stop # jump / form submit

//             let printContents = document.getElementById("new_repo").innerHTML;
//             let originalContents = document.body.innerHTML;

//             document.body.innerHTML = printContents;
//             window.print();
//             document.body.innerHTML = originalContents;
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
  const pdfBtn = document.getElementById("pdfBtn");

  if (pdfBtn) {
    pdfBtn.addEventListener("click", function () {
      let element = document.getElementById("rep_con");
      let opt = {
        margin: 0.5,
        filename: "Medical_Report.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      };

      html2pdf().set(opt).from(element).save();
    });
  }
});
