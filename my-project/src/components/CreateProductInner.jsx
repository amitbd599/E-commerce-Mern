
import { Select, Option } from "@material-tailwind/react";
import Editor from "../helper/Editor";
import { useEffect, useRef, useState } from "react";
import { ErrorToast, IsEmpty, SuccessToast } from "../helper/Helper";
import ProductStore from "../store/ProductStore";
import { useNavigate } from "react-router-dom";
const CreateProductInner = () => {
    const [editorData, setEditorData] = useState("");
    let { CreateProductRequest, CategoryListRequest, CategoryList, BrandList, BrandListRequest } = ProductStore()
    useEffect(() => {
        (async () => {
            await CategoryListRequest()
            await BrandListRequest()
        })()
    }, [])

    console.log(CategoryList);
    let navigate = useNavigate()
    let [discount, setDiscount] = useState(false)
    let [stock, setStock] = useState(false)
    let [category, setCategory] = useState("")
    let [brand, setBrand] = useState("")
    let [remark, setRemark] = useState("")
    let { titleRef, shortDesRef, priceRef, discountPriceRef, img1Ref, img2Ref, img3Ref, img4Ref, img5Ref, img6Ref, img7Ref, img8Ref, colorRef, sizeRef } = useRef()


    let handleDiscount = (value) => {
        setDiscount(value);
    }
    let handleStock = (value) => {
        setStock(value);
    }
    let handleCategory = (value) => {
        setCategory(value);
    }
    let handleBrand = (value) => {
        setBrand(value);
    }
    let handleRemark = (value) => {
        setRemark(value);
    }

    console.log(category);

    let CreateProduct = async () => {
        let title = titleRef.value
        let shortDes = shortDesRef.value
        let price = priceRef.value
        let discountPrice = discountPriceRef.value
        let img1 = img1Ref.value
        let img2 = img2Ref.value
        let img3 = img3Ref.value
        let img4 = img4Ref.value
        let img5 = img5Ref.value
        let img6 = img6Ref.value
        let img7 = img7Ref.value
        let img8 = img8Ref.value
        let des = editorData
        let color = colorRef.value
        let size = sizeRef.value
        let categoryID = category?._id || ""
        let brandID = brand?._id || ""


        if (IsEmpty(title)) {
            ErrorToast("title required fields!")
            return true
        }
        else if (IsEmpty(shortDes)) {
            ErrorToast("shortDes is required!")
            return true
        }
        else if (IsEmpty(price)) {
            ErrorToast("price is required!")
            return true
        }
        else if (IsEmpty(discountPrice)) {
            ErrorToast("discount Price is required!")
            return true
        }
        else if (IsEmpty(img1)) {
            ErrorToast("img1 is required!")
            return true
        }
        else if (IsEmpty(img2)) {
            ErrorToast("img2 is required!")
            return true
        }
        else if (IsEmpty(img3)) {
            ErrorToast("img3 is required!")
            return true
        }
        else if (IsEmpty(img4)) {
            ErrorToast("img4 is required!")
            return true
        }
        else if (IsEmpty(des)) {
            ErrorToast("des is required!")
            return true
        }
        else if (IsEmpty(color)) {
            ErrorToast("color is required!")
            return true
        }
        else if (IsEmpty(size)) {
            ErrorToast("size is required!")
            return true
        }
        else if (IsEmpty(categoryID)) {
            ErrorToast("category is required!")
            return true
        }
        else if (IsEmpty(brandID)) {
            ErrorToast("brand is required!")
            return true
        }
        else if (IsEmpty(remark)) {
            ErrorToast("remark is required!")
            return true
        }
        else {
            await CreateProductRequest({ title, shortDes, price, discount, discountPrice, img1, img2, img3, img4, img5, img6, img7, img8, stock, remark, des, color, size, categoryID, brandID }).then((res) => {
                if (res) {
                    SuccessToast("Product created successfully!")
                    navigate("/all-product")
                } else {
                    ErrorToast("Something went wrong!")
                }
            })
        }

    }
    return (
        <div className=" bg-white p-[20px] rounded-lg">
            <div>
                <h2 className="text-[26px] text-gray-700 font-medium pb-[20px]">Create Product:</h2>
            </div>
            <div className="grid grid-cols-12 gap-[20px]">
                <div className="col-span-6">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Title*
                        </label>
                        <input
                            ref={(input) => titleRef = input}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Price*
                        </label>
                        <input
                            ref={(input) => priceRef = input}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Is Discount?*
                        </label>
                        <div >
                            <Select onChange={handleDiscount} value={discount} label="Select Version" className="h-[55px] flex items-center">
                                <Option value={true}>True</Option>
                                <Option value={false}>False</Option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Discount Price*
                        </label>
                        <input
                            ref={(input) => discountPriceRef = input}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Image CDN-1 *
                        </label>
                        <input
                            ref={(input) => img1Ref = input}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Image CDN-2 *
                        </label>
                        <input
                            ref={(input) => img2Ref = input}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Image CDN-3 *
                        </label>
                        <input
                            ref={(input) => img3Ref = input}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Image CDN-4 *
                        </label>
                        <input
                            ref={(input) => img4Ref = input}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Image CDN-5 *
                        </label>
                        <input
                            ref={(input) => img5Ref = input}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Image CDN-6 *
                        </label>
                        <input
                            ref={(input) => img6Ref = input}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Image CDN-7 *
                        </label>
                        <input
                            ref={(input) => img7Ref = input}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Image CDN-8 *
                        </label>
                        <input
                            ref={(input) => img8Ref = input}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Category*
                        </label>
                        <div >
                            <Select onChange={handleCategory} defaultValue={category?.categoryName} label="Select Version" className="h-[55px] flex items-center">

                                {
                                    CategoryList?.map((item, index) =>
                                        <Option key={index} value={item}>{item?.categoryName}</Option>
                                    )
                                }

                            </Select>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Brand*
                        </label>
                        <div >
                            <Select onChange={handleBrand} defaultValue={brand?.brandName} label="Select Version" className="h-[55px] flex items-center">

                                {
                                    BrandList?.map((item, index) =>
                                        <Option key={index} value={item}>{item?.brandName}</Option>
                                    )
                                }
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Size *
                        </label>
                        <input
                            ref={(input) => sizeRef = input}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Color *
                        </label>
                        <input
                            ref={(input) => colorRef = input}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>

                <div className="col-span-2">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Remark*
                        </label>
                        <div >
                            <Select onChange={handleRemark} value={remark} label="Select Version" className="h-[55px] flex items-center">
                                <Option value="New">New</Option>
                                <Option value="Old">Old</Option>
                                <Option value="New Arrival">New Arrival</Option>
                                <Option value="Latest Model">Latest Model</Option>
                                <Option value="Limited Edition">Limited Edition</Option>
                                <Option value="Vintage">Vintage</Option>
                                <Option value="Classic">Classic</Option>
                                <Option value="Reconditioned">Reconditioned</Option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Stock?*
                        </label>
                        <div >
                            <Select onChange={handleStock} value={stock} label="Select Version" className="h-[55px] flex items-center">
                                <Option value={true}>True</Option>
                                <Option value={false}>False</Option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="col-span-12">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Short Description *
                        </label>
                        <textarea ref={(input) => shortDesRef = input} rows={4} name="" id="" className="input_inner"></textarea>
                    </div>
                </div>
                <div className="col-span-12">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Description *
                        </label>
                        <Editor data={editorData} onDataChange={setEditorData} />
                    </div>
                </div>


            </div>
            <div className="mt-[60px]" >
                <button className="my_btn" onClick={CreateProduct}>Create new product</button>
            </div>

        </div>
    )
}

export default CreateProductInner