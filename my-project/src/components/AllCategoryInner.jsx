/* eslint-disable react/no-unknown-property */

import DataTable from "react-data-table-component"
import ProductStore from "../store/ProductStore";
import { useEffect } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DeleteAlert, SuccessToast } from "../helper/Helper";

const AllCategoryInner = () => {
    let { CategoryListRequest, CategoryList, DeleteCategoryRequest } = ProductStore()

    useEffect(() => {
        (async () => {
            await CategoryListRequest()
        })()
    }, [])



    let deleteProduct = async (id) => {
        DeleteAlert(DeleteCategoryRequest, id).then(async (res) => {
            if (res) {
                SuccessToast('Product deleted successfully!')
                await CategoryListRequest()
            }
        })
    }


    const columns = [
        {
            name: 'Category Name',
            selector: row => row.categoryName,
        },
        {
            name: 'Image',
            selector: row => (
                <div className="w-[50px] py-[10px]">
                    <img src={row.categoryImg} alt="" />
                </div>
            ),
        },
        {
            name: 'Action',
            selector: row => (
                <div className="flex gap-2">
                    <button onClick={() => deleteProduct(row?._id)} className="p-2"><FaRegTrashAlt className="text-[20px]" /></button>
                    <Link to={"/update-category/" + row?._id} className="p-2"><FaEdit className="text-[20px]" /></Link>
                </div>
            ),
            width: '200px',
        },
    ];


    return (
        <div className=" bg-white p-[20px] rounded-lg">
            <div>
                <h2 className="text-[26px] text-gray-700 font-medium pb-[20px]">All Category:</h2>
            </div>

            {/* All slider table */}
            <div>
                <DataTable title="Category list data" columns={columns} data={CategoryList} pagination />

            </div>


        </div>
    )
}

export default AllCategoryInner