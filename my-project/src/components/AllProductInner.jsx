/* eslint-disable react/no-unknown-property */

import DataTable from "react-data-table-component"
import ProductStore from "../store/ProductStore";
import { useEffect } from "react";

const AllProductInner = () => {

    let { ProductListRequest_Feature, ProductList } = ProductStore()

    useEffect(() => {
        (async () => {
            await ProductListRequest_Feature(5000, 1)
        })()
    }, [])

    console.log(ProductList?.products);

    const columns = [
        {
            name: 'Title',
            width: '300px',
            selector: row => row.title,
        },
        {
            name: 'Img',
            selector: row =>
            (
                <div className="w-[80px] h-[80px] my-[20px]">
                    <img className="rounded-lg overflow-hidden" src={row?.img1} alt="" />
                </div>
            ),
            width: '120px',

        },
        {
            name: 'Brand',
            selector: row => row?.brandDetails?.brandName,
            width: '200px',
        },
        {
            name: 'Category',
            selector: row => row?.catagoriesDetails?.categoryName,
            width: '200px',
        },
        {
            name: 'Stock',
            selector: row => (
                <div>
                    {row?.stock === true ? <span className="bg-[#34d399] text-[#fff] px-[8px] font-medium py-[4px] inline-block rounded-md">True</span> : <span className="bg-[#f87171] text-[#fff] px-[8px] font-medium py-[4px] inline-block rounded-md">False</span>}
                </div>
            ),
            width: '100px',
        },
        {
            name: 'Color',
            selector: row => row?.color,
            width: '200px',
        },
        {
            name: 'Price',
            selector: row => (
                <div>
                    <span className="bg-[#a855f7] text-[#fff] px-[8px] font-medium text-[14px] py-[4px] inline-block rounded-md">
                        {row?.price}
                    </span>
                </div>
            ),
            width: '100px',
        },
        {
            name: 'Is Discount',
            selector: row => (
                <div>
                    {row?.discount === true ? <span className="bg-[#34d399] text-[#fff] px-[8px] font-medium py-[4px] inline-block rounded-md">True</span> : <span className="bg-[#f87171] text-[#fff] px-[8px] font-medium py-[4px] inline-block rounded-md">False</span>}
                </div>
            ),
            width: '100px',
        },
        {
            name: 'Discount Price',

            selector: row => (
                <div>
                    <span className="bg-[#34d399] text-[#fff] px-[8px] font-medium text-[14px] py-[4px] inline-block rounded-md">
                        {row?.discountPrice}
                    </span>
                </div>
            ),
            width: '100px',

        },
        {
            name: 'Remark',
            selector: row => row?.remark,
            width: '100px',
        },
        {
            name: 'Size',
            selector: row => row?.size,
            width: '100px',
        },
    ];


    return (
        <div className=" bg-white p-[20px] rounded-lg">
            <div>
                <h2 className="text-[26px] text-gray-700 font-medium pb-[20px]">All Products:</h2>
            </div>

            {/* All slider table */}
            <div>
                <DataTable title="Product list data" columns={columns} data={ProductList?.products} pagination />

            </div>


        </div>
    )
}

export default AllProductInner