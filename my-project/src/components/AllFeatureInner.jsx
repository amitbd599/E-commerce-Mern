/* eslint-disable react/no-unknown-property */

import DataTable from "react-data-table-component"
import FeatureStore from "../store/FeatureStore";
import { useEffect } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DeleteAlert, SuccessToast } from "../helper/Helper";

const AllFeatureInner = () => {
    let { FeatureList, FeatureListRequest, FeatureDeleteRequest } = FeatureStore()


    useEffect(() => {
        (async () => {
            await FeatureListRequest()

        })();
    }, []);


    let deleteProduct = async (id) => {
        DeleteAlert(FeatureDeleteRequest, id).then(async (res) => {
            if (res) {
                SuccessToast('Product deleted successfully!')
                await FeatureListRequest()
            }
        })
    }

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Sub title',
            selector: row => row.sub_title,
        },
        {
            name: 'Img',
            selector: row => (
                <div className="w-[50px] py-[10px]"><img src={row.img} alt="" /></div>
            ),
        },
        {
            name: 'Button title',
            selector: row => row.button_title,
        },
        {
            name: 'Button link',
            selector: row => row.button_link,
        },
        {
            name: 'Action',
            selector: row => (
                <div className="flex gap-2">
                    <button onClick={() => deleteProduct(row?._id)} className="p-2"><FaRegTrashAlt className="text-[20px]" /></button>
                    <Link to={"/update-feature/" + row?._id} className="p-2"><FaEdit className="text-[20px]" /></Link>
                </div>
            ),
            width: '200px',
        },
    ];



    console.log(FeatureList);
    return (
        <div className=" bg-white p-[20px] rounded-lg">
            <div>
                <h2 className="text-[26px] text-gray-700 font-medium pb-[20px]">All Feature:</h2>
            </div>

            {/* All slider table */}
            <div>
                <DataTable title="Feature list data" columns={columns} data={FeatureList} pagination />

            </div>


        </div>
    )
}

export default AllFeatureInner