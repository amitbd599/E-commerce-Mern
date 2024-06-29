/* eslint-disable react/no-unknown-property */

import { useEffect } from "react"
import SliderStore from "../store/SliderStore"
import { FaRegEdit, FaTrashAlt } from "react-icons/fa"
import { DeleteAlert, SuccessToast } from "../helper/Helper"
import { Link } from "react-router-dom"

const AllSliderInner = () => {
    let { SliderList, SliderListRequest, DeleteSliderRequest } = SliderStore()

    useEffect(() => {
        (async () => {
            await SliderListRequest()
        })()
    }, [])


    let deleteSlider = async (id) => {
        DeleteAlert(DeleteSliderRequest, id).then(async (res) => {
            if (res) {
                SuccessToast('Slider deleted successfully!')
                await SliderListRequest()
            }
        })
    }

    return (
        <div className=" bg-white p-[20px] rounded-lg">
            <div>
                <h2 className="text-[26px] text-gray-700 font-medium pb-[20px]">All Slider:</h2>
            </div>

            {/* All slider table */}
            <div>
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                    {
                        SliderList?.length === 0 ?
                            <div className="p-6 text-center">No slider found.</div>
                            : <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                                            Title
                                        </th>


                                        <th scope="col" className="px-6 py-4 font-medium text-gray-900" />
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                                    {
                                        SliderList?.map((item, index) =>
                                            <tr key={index} className="hover:bg-gray-50">
                                                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                                    <div className="relative h-[80px] w-[100px]">
                                                        <img
                                                            className="h-full w-full rounded-full object-cover object-center"
                                                            src={item?.img}
                                                            alt=""
                                                        />

                                                    </div>

                                                </th>
                                                <td className="px-6 py-4">
                                                    <p>{item?.title}</p>
                                                </td>


                                                <td className="px-6 py-4">
                                                    <div className="flex justify-end gap-4">
                                                        <Link to={`/update-slider/${item?._id}`} className="text-[20px] p-[10px] cursor-pointer">
                                                            <FaRegEdit />
                                                        </Link>
                                                        <span className="text-[20px] p-[10px] cursor-pointer" onClick={() => deleteSlider(item?._id)}>
                                                            <FaTrashAlt />
                                                        </span>

                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    }


                                </tbody>
                            </table>
                    }

                </div>

            </div>


        </div>
    )
}

export default AllSliderInner