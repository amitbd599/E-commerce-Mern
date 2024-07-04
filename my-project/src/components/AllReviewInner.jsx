/* eslint-disable react/no-unknown-property */

import DataTable from "react-data-table-component"
import { FaRegTrashAlt } from "react-icons/fa";
import ReviewStore from "../store/ReviewStore";
import { useEffect } from "react";
import { DeleteAlert, SuccessToast } from "../helper/Helper";

const AllReviewInner = () => {
    let { GetAllReviewRequest, reviewList, ReviewDeleteRequest } = ReviewStore()

    useEffect(() => {
        (async () => {
            await GetAllReviewRequest()
        })();
    }, [])




    let deleteProduct = async (id) => {
        DeleteAlert(ReviewDeleteRequest, id).then(async (res) => {
            if (res) {
                SuccessToast('Product deleted successfully!')
                await GetAllReviewRequest()
            }
        })
    }
    const columns = [
        {
            name: 'Product ID',
            selector: row => row.productID,
            width: '250px',
        },
        {
            name: 'Rating',
            selector: row => row.rating,
            width: '100px',
        },
        {
            name: 'User ID',
            selector: row => row.userID,
            width: '250px',
        },
        {
            name: 'Description',
            selector: row => (
                <div className=" py-[10px]">
                    <span className="wrap-pre">{row.des}</span>
                </div>
            ),
            width: '700px',
        },

        {
            name: 'Action',
            selector: row => (
                <div className="flex gap-2">
                    <button onClick={() => deleteProduct(row?._id)} className="p-2"><FaRegTrashAlt className="text-[20px]" /></button>

                </div>
            ),
            width: '200px',
        },
    ];


    return (
        <div className=" bg-white p-[20px] rounded-lg">
            <div>
                <h2 className="text-[26px] text-gray-700 font-medium pb-[20px]">All Reviews:</h2>
            </div>

            {/* All slider table */}
            <div>
                <DataTable title="Reviews list data" columns={columns} data={reviewList} pagination />

            </div>


        </div>
    )
}

export default AllReviewInner