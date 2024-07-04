import { useEffect } from "react";
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
      <div className="cs-container">
        <div className="cs-invoice cs-style1">
          <div className="cs-invoice_in" id="download_section">
            <div className="cs-invoice_head cs-type1 cs-mb25">
              <div className="cs-invoice_left">
                <p className="cs-invoice_number cs-primary_color cs-mb5 cs-f16">
                  <b className="cs-primary_color">Invoice No:</b> # {rootInvoiceLayer?.[0]?._id}
                </p>
                <p className="cs-invoice_number cs-primary_color cs-mb5 cs-f16">
                  <b className="cs-primary_color">Transaction No:</b> # {rootInvoiceLayer?.[0]?.tran_id}
                </p>
                <p className="cs-invoice_date cs-primary_color cs-m0">
                  <b className="cs-primary_color">Date: </b> {moment(rootInvoiceLayer?.[0]?.createdAt).format("DD-MM-YYYY")}
                </p>
              </div>
              <div className="cs-invoice_right cs-text_right">
                <div className="cs-logo cs-mb5">
                  <img src="/Img/logo.svg" alt="Logo" />
                </div>
              </div>
            </div>
            <div className="cs-invoice_head cs-mb10">
              <div className="cs-invoice_left">
                <b className="cs-primary_color">Invoice To:</b>
                <p>
                  {rootInvoiceLayer?.[0]?.cus_details?.[0]?.Name}
                  <br />
                  {rootInvoiceLayer?.[0]?.cus_details?.[0]?.Address}
                  <br />
                  {rootInvoiceLayer?.[0]?.cus_details?.[0]?.Email}
                  <br />
                  {rootInvoiceLayer?.[0]?.cus_details?.[0]?.Phone}
                </p>
              </div>
              <div className="cs-invoice_right cs-text_right">
                <b className="cs-primary_color">Pay To:</b>
                <p>
                  StockX
                  <br />
                  2705 N. Enterprise St
                  <br />
                  Orange, CA 92865
                  <br />
                  info@stockx.com
                </p>
              </div>
            </div>
            <div className="cs-table cs-style1">
              <div className="cs-round_border">
                <div className="cs-table_responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="cs-width_3 cs-semi_bold cs-primary_color cs-focus_bg">
                          Product name
                        </th>
                        <th className="cs-width_4 cs-semi_bold cs-primary_color cs-focus_bg">
                          color
                        </th>
                        <th className="cs-width_2 cs-semi_bold cs-primary_color cs-focus_bg ">
                          Size
                        </th>
                        <th className="cs-width_1 cs-semi_bold cs-primary_color cs-focus_bg">
                          price
                        </th>
                        <th className="cs-width_1 cs-semi_bold cs-primary_color cs-focus_bg">
                          QTY
                        </th>

                        <th className="cs-width_2 cs-semi_bold cs-primary_color cs-focus_bg cs-text_right">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {InvoiceSingle?.map((item, index) =>
                        <tr key={index}>
                          <td className="cs-width_3">{item?.product?.title}</td>
                          <td className="cs-width_4">
                            {item?.color}
                          </td>
                          <td className="cs-width_1">{item?.size}</td>
                          <td className="cs-width_1">
                            {item?.price}
                          </td>
                          <td className="cs-width_1">{item?.qty}</td>

                          <td className="cs-width_2 cs-text_right"> ${parseInt(item?.price) * parseInt(item?.qty)}</td>
                        </tr>

                      )}


                    </tbody>
                  </table>
                </div>
                <div className="cs-invoice_footer cs-border_top">
                  <div className="cs-left_footer cs-mobile_hide">
                    <p className="cs-mb0">
                      <b className="cs-primary_color">Additional Information:</b>
                    </p>
                    <p className="cs-m0">
                      At check in you may need to present the credit <br />
                      card used for payment of this ticket.
                    </p>
                  </div>
                  <div className="cs-right_footer">
                    <table>
                      <tbody>
                        <tr className="cs-border_left">
                          <td className="cs-width_3 cs-semi_bold cs-primary_color cs-focus_bg">
                            Subtotal
                          </td>
                          <td className="cs-width_3 cs-semi_bold cs-focus_bg cs-primary_color cs-text_right">
                            ${rootInvoiceLayer?.[0]?.total}
                          </td>
                        </tr>
                        <tr className="cs-border_left">
                          <td className="cs-width_3 cs-semi_bold cs-primary_color cs-focus_bg">
                            Vat 5%:
                          </td>
                          <td className="cs-width_3 cs-semi_bold cs-focus_bg cs-primary_color cs-text_right">
                            ${rootInvoiceLayer?.[0]?.vat}
                          </td>
                        </tr>
                        <tr className="cs-border_left">
                          <td className="cs-width_3 cs-semi_bold cs-primary_color cs-focus_bg">
                            Shipping
                          </td>
                          <td className="cs-width_3 cs-semi_bold cs-focus_bg cs-primary_color cs-text_right">
                            $75
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="cs-invoice_footer">
                <div className="cs-left_footer cs-mobile_hide" />
                <div className="cs-right_footer">
                  <table>
                    <tbody>
                      <tr className="cs-border_none">
                        <td className="cs-width_3 cs-border_top_0 cs-bold cs-f16 cs-primary_color">
                          Total Amount
                        </td>
                        <td className="cs-width_3 cs-border_top_0 cs-bold cs-f16 cs-primary_color cs-text_right">
                          ${rootInvoiceLayer?.[0]?.payable}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="cs-note">
              <div className="cs-note_left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth={32}
                  />
                  <path
                    d="M256 56v120a32 32 0 0032 32h120M176 288h160M176 368h160"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                  />
                </svg>
              </div>
              <div className="cs-note_right">
                <p className="cs-mb0">
                  <b className="cs-primary_color cs-bold">Note:</b>
                </p>
                <p className="cs-m0">
                  Here we can write a additional notes for the client to get a better
                  understanding of this invoice.
                </p>
              </div>
            </div>
            {/* .cs-note */}
          </div>
          <div className="cs-invoice_btns cs-hide_print">
            <a href="javascript:window.print()" className="cs-invoice_btn cs-color1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth={32}
                />
                <rect
                  x={128}
                  y={240}
                  width={256}
                  height={208}
                  rx="24.32"
                  ry="24.32"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth={32}
                />
                <path
                  d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth={32}
                />
                <circle cx={392} cy={184} r={24} />
              </svg>
              <span>Print</span>
            </a>
            <button id="download_btn" className="cs-invoice_btn cs-color2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Download</title>
                <path
                  d="M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M176 272l80 80 80-80M256 48v288"
                />
              </svg>
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default InvoiceInner;
