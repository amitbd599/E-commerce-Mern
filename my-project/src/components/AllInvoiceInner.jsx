/* eslint-disable react/no-unknown-property */

import DataTable from "react-data-table-component"
import Moment from 'react-moment';
import { useEffect } from "react";
import CartStore from "../store/CartStore";
import { Link } from "react-router-dom";

const AllInvoiceInner = () => {
    let { GetAllInvoiceListGetRequest, InvoiceList } = CartStore()

    useEffect(() => {
        (async () => {
            await GetAllInvoiceListGetRequest()
        })();
    }, [])


    const columns = [
        {
            name: 'Tran ID',
            selector: row => row.tran_id,
            width: '150px',
        },
        {
            name: 'createdAt',
            selector: row => (
                <Moment format="YYYY-MM-DD">{row.createdAt}</Moment>
            ),
            width: '120px',
        },
        {
            name: 'Customer name',
            selector: row => row.cus_details[0].Name,
            width: '250px',
        },
        {
            name: 'Customer email',
            selector: row => row.cus_details[0].Email,
            width: '250px',
        },
        {
            name: 'Phone',
            selector: row => row.cus_details[0].Phone,
            width: '200px',
        },
        {
            name: 'Deliver status',
            selector: row =>
            (
                <div>
                    <span className={`${row.deliver_status === "success" ? "bg-[#10b981]" : "bg-[#eab308]"} text-[#fff] px-[4px] font-medium text-[12px] py-[2px] inline-block rounded-md`}>
                        {row.deliver_status}
                    </span>
                </div>
            )
            ,
            width: '100px',
        },
        {
            name: 'Payment status',
            selector: row => (
                <div>
                    <span className={`${row.payment_status === "success" ? "bg-[#10b981]" : "bg-[#eab308]"} text-[#fff] px-[4px] font-medium text-[12px] py-[2px] inline-block rounded-md`}>
                        {row.payment_status}
                    </span>
                </div>
            ),
            width: '100px',
        },

        {
            name: 'Payable',
            selector: row => (
                <div>
                    <span className="bg-[#f43f5e] text-[#fff] px-[4px] font-medium text-[14px] py-[2px] inline-block rounded-md">{row.payable}</span>
                </div>
            ),
            width: '150px',
        },
        {
            name: 'Action',
            selector: row => (
                <div className="flex gap-2">

                    <Link target="_blank" to={"/invoice/" + row?._id} className=" bg-[#a855f7] text-[#fff] px-[8px] font-medium text-[12px] py-[6px] inline-block rounded-md">View Invoice</Link>

                </div>
            ),
            width: '150px',
        },



    ];


    return (
        <div className=" bg-white p-[20px] rounded-lg">
            <div>
                <h2 className="text-[26px] text-gray-700 font-medium pb-[20px]">All Invoices:</h2>
            </div>

            {/* All slider table */}
            <div>
                <DataTable title="Invoices list data" columns={columns} data={InvoiceList} pagination />

            </div>


        </div>
    )
}

export default AllInvoiceInner