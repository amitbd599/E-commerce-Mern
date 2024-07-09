import React, { useEffect } from "react";
import CartStore from "../store/CartStore";
import { useParams } from "react-router-dom";
import moment from "moment";

const InvoiceInner = () => {
  let {
    InvoiceSingleGetRequest,
    InvoiceListGetRequest,
    InvoiceSingle,
    InvoiceList,
  } = CartStore();

  let { id } = useParams();

  useEffect(() => {

    (async () => {
      await InvoiceSingleGetRequest(id);
      await InvoiceListGetRequest();
    })();
  }, []);

  let rootInvoiceLayer = InvoiceList?.filter((item) => item._id === id);

  return (
    <section className="invoice">
      <div className="container-fluid invoice-container ">
        {/* Header */}
        <header>
          <div className="row align-items-center gy-3">
            <div className="col-sm-7 text-center text-sm-start">
              <img
                id="logo"
                src="/assets/img/download.png"
                title="Koice"
                alt="Koice"
              />
            </div>
            <div className="col-sm-5 text-center text-sm-end">
              <h4 className="text-7 mb-0">Invoice</h4>
              <strong>Transaction No:</strong> {rootInvoiceLayer?.[0]?.tran_id}
            </div>
          </div>
          <hr />
        </header>
        {/* Main Content */}
        <main>
          <div className="row">
            <div className="col-sm-6">
              <strong>Date:</strong>{" "}
              {moment(rootInvoiceLayer?.[0]?.createdAt).format("DD-MM-YYYY")}
            </div>
            <div className="col-sm-6 text-sm-end">
              {" "}
              <strong>Invoice No:</strong> {rootInvoiceLayer?.[0]?._id}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-6 text-sm-end order-sm-1">
              {" "}
              <strong>Pay To:</strong>
              <address>
                StockX
                <br />
                2705 N. Enterprise St
                <br />
                Orange, CA 92865
                <br />
                info@stockx.com
              </address>
            </div>
            <div className="col-sm-6 order-sm-0">
              {" "}
              <strong>Invoiced To:</strong>
              <address>
                {rootInvoiceLayer?.[0]?.cus_details?.[0]?.Name}
                <br />
                {rootInvoiceLayer?.[0]?.cus_details?.[0]?.Address}
                <br />
                {rootInvoiceLayer?.[0]?.cus_details?.[0]?.Email}
                <br />
                {rootInvoiceLayer?.[0]?.cus_details?.[0]?.Phone}
              </address>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table border mb-0">
              <thead>
                <tr className="bg-light">
                  <td className="col-6">
                    <strong>Product name</strong>
                  </td>
                  <td className="col-1">
                    <strong>color</strong>
                  </td>
                  <td className="col-1 text-center">
                    <strong>price</strong>
                  </td>
                  <td className="col-1 text-center">
                    <strong>QTY</strong>
                  </td>
                  <td className="col-1 text-center">
                    <strong>Size</strong>
                  </td>
                  <td className="col-2 text-end">
                    <strong>Amount</strong>
                  </td>
                </tr>
              </thead>
              <tbody>
                {InvoiceSingle?.map((item, index) => (
                  <tr key={index}>
                    <td className="col-6">{item?.product?.title}</td>
                    <td className="col-1 text-1">{item?.color}</td>
                    <td className="col-1 text-center">${item?.price}</td>
                    <td className="col-1 text-center">{item?.qty}</td>
                    <td className="col-1 text-center">{item?.size}</td>
                    <td className="col-2 text-end">
                      ${parseInt(item?.price) * parseInt(item?.qty)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-responsive">
            <table className="table border border-top-0 mb-0">
              <tbody>
                <tr className="bg-light">
                  <td className="text-end">
                    <strong>Sub Total:</strong>
                  </td>
                  <td className="col-sm-2 text-end">
                    ${rootInvoiceLayer?.[0]?.total}
                  </td>
                </tr>
                <tr className="bg-light">
                  <td className="text-end">
                    <strong>
                      Vat (${rootInvoiceLayer?.[0]?.total} x 0.5%):
                    </strong>
                  </td>
                  <td className="col-sm-2 text-end">
                    ${rootInvoiceLayer?.[0]?.vat}
                  </td>
                </tr>
                <tr className="bg-light">
                  <td className="text-end">
                    <strong>Shipping Cost:</strong>
                  </td>
                  <td className="col-sm-2 text-end">$75</td>
                </tr>
                <tr className="bg-light">
                  <td className="text-end">
                    <strong>Total:</strong>
                  </td>
                  <td className="col-sm-2 text-end">
                    ${rootInvoiceLayer?.[0]?.payable}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
        {/* Footer */}
        <footer className="text-center mt-4">
          <p className="text-1">
            <strong>NOTE :</strong> This is computer generated receipt and does
            not require physical signature.
          </p>
          <div className="btn-group btn-group-sm d-print-none">
            {" "}
            <a
              href="javascript:window.print()"
              className="btn btn-light border text-black-50 shadow-none"
            >
              <i className="fa fa-print" /> Print &amp; Download
            </a>{" "}
          </div>
        </footer>
      </div>
    </section>
  );
};

export default InvoiceInner;
