import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

class pdfScript {
  //Template
  template(row) {
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.setFont("inter", "normal");
    // Logoin
    pdf.addImage("/assets/img/download.png", "png", 15, 8, 0, 14);

    pdf.setDrawColor(0);
    pdf.setFillColor(0, 0, 0);
    pdf.rect(-10, 44, 400, 1, "F");

    pdf.setFontSize(40);
    pdf.setFont("inter", "bold");
    pdf.setTextColor(0, 0, 0);

    pdf.setTextColor(0, 0, 0);
    pdf.setFont("inter", "normal");
    pdf.setFontSize(10);
    pdf.text(
      `Transaction ID # ${row?.tran_id}`,
      pdf.internal.pageSize.width - 15,
      15,
      {
        align: "right",
      }
    );
    pdf.text(
      `Deliver Status:: ${row?.deliver_status}`,
      pdf.internal.pageSize.width - 15,
      21,
      {
        align: "right",
      }
    );
    pdf.text(
      `Payment Status:  ${row?.payment_status}`,
      pdf.internal.pageSize.width - 15,
      27,
      {
        align: "right",
      }
    );
    pdf.text(`Total:  ${row?.payable}`, pdf.internal.pageSize.width - 15, 33, {
      align: "right",
    });
    pdf.text(`Date:  ${row?.createdAt}`, pdf.internal.pageSize.width - 15, 39, {
      align: "right",
    });

    pdf.text(`${"StockX"}`, 15, 29);
    pdf.setFontSize(10);
    pdf.text(`4948 Juniper Drive Saginaw, MI 48607`, 15, 34);
    pdf.text(`admin@stockx.com, 989-923-2477, www.stockx.com`, 15, 39);

    // Right side data
    let templateTwoRightStart = parseInt(pdf.internal.pageSize.width) / 2;
    // Filled red square
    pdf.setDrawColor(0);
    pdf.setFillColor(0, 0, 0);
    pdf.rect(15, 52, templateTwoRightStart - 30, 8, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(12);
    pdf.text("Client information", 20, 57);
    pdf.setTextColor(0, 0, 0);
    // company_name
    pdf.setFontSize(14);
    pdf.setFont("inter", "bold");
    pdf.text(`${row?.cus_details?.[0]?.Name}`, 20, 66);
    pdf.setFont("inter", "normal");
    pdf.setFontSize(10);
    pdf.text(`Address: ${row?.cus_details?.[0]?.Address}`, 20, 73);
    pdf.text(`Phone: ${row?.cus_details?.[0]?.Phone}`, 20, 78);
    pdf.text(`Email: ${row?.cus_details?.[0]?.Email}`, 20, 83);

    pdf.setFontSize(18);
    pdf.text(`Sub Total: ${row?.payable - 75 - row?.vat}`, 20, 110);
    pdf.text(`Vat: ${row?.vat}`, 20, 120);
    pdf.text(`Shipping Cost: 75`, 20, 130);
    pdf.text(`Total: ${row?.payable}`, 20, 140);
    pdf.setTextColor(0, 0, 0);

    pdf.output("dataurlnewwindow");
    // pdf.save("invoice.pdf");

    // Convert the PDF to a data URL
    const pdfDataUri = pdf.output("datauristring");
    // Set the data URL in the state to trigger a re-render
    return pdfDataUri;
  }
}

let pdfScriptData = new pdfScript();

export default pdfScriptData;
