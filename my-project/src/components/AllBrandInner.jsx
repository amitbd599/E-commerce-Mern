/* eslint-disable react/no-unknown-property */

import DataTable from "react-data-table-component"
import ProductStore from "../store/ProductStore";
import { useEffect } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DeleteAlert, SuccessToast } from "../helper/Helper";

const AllBrandInner = () => {
    let { BrandListRequest, BrandList, DeleteBrandRequest } = ProductStore()

    useEffect(() => {
        (async () => {
            await BrandListRequest()
        })();
    }, [])


    let deleteProduct = async (id) => {
        DeleteAlert(DeleteBrandRequest, id).then(async (res) => {
            if (res) {
                SuccessToast('Product deleted successfully!')
                await BrandListRequest()
            }
        })
    }
    const columns = [
        {
            name: 'Brand Name',
            selector: row => row.brandName,
        },
        {
            name: 'Img',
            selector: row => (
                <div className="w-[50px] py-[10px]">
                    <img src={row.brandImg} alt="" />
                </div>
            ),
        },
        {
            name: 'Action',
            selector: row => (
                <div className="flex gap-2">
                    <button onClick={() => deleteProduct(row?._id)} className="p-2"><FaRegTrashAlt className="text-[20px]" /></button>
                    <Link to={"/update-brand/" + row?._id} className="p-2"><FaEdit className="text-[20px]" /></Link>
                </div>
            ),
            width: '200px',
        },
    ];

    return (
        <div className=" bg-white p-[20px] rounded-lg">
            <div>
                <h2 className="text-[26px] text-gray-700 font-medium pb-[20px]">All Brands:</h2>
            </div>

            {/* All slider table */}
            <div>
                <DataTable title="Brands list data" columns={columns} data={BrandList} pagination />

            </div>


        </div>
    )
}

export default AllBrandInner