
import Editor from "../helper/Editor";
import { useEffect, useRef, useState } from "react";
import { ErrorToast, IsEmpty, SuccessToast } from "../helper/Helper";
import ProductStore from "../store/ProductStore";
import Select from 'react-select';
import { useNavigate, useParams } from "react-router-dom";
const UpdateProductInner = () => {
    let { titleRef, shortDesRef, priceRef, discountPriceRef, img1Ref, img2Ref, img3Ref, img4Ref, img5Ref, img6Ref, img7Ref, img8Ref, colorRef, sizeRef } = useRef()
    let { id } = useParams()
    const [editorData, setEditorData] = useState("");
    let { UpdateProductRequest, CategoryListRequest, CategoryList, BrandList, BrandListRequest, ProductDetailsRequest } = ProductStore()


    let navigate = useNavigate()
    let defaultOption = { label: "Select Value", value: "" };
    let [discount, setDiscount] = useState(defaultOption)
    let [stock, setStock] = useState(defaultOption)
    let [category, setCategory] = useState(defaultOption)
    let [brand, setBrand] = useState(defaultOption)
    let [remark, setRemark] = useState(defaultOption)




    useEffect(() => {
        (async () => {

            await ProductDetailsRequest(id).then((res) => {
                if (res) {
                    titleRef.value = res.title
                    shortDesRef.value = res.shortDes
                    priceRef.value = res.price
                    discountPriceRef.value = res.discountPrice
                    img1Ref.value = res.img1
                    img2Ref.value = res.img2
                    img3Ref.value = res.img3
                    img4Ref.value = res.img4
                    img5Ref.value = res.img5
                    img6Ref.value = res.img6
                    img7Ref.value = res.img7
                    img8Ref.value = res.img8
                    sizeRef.value = res.size
                    colorRef.value = res.color
                    setEditorData(res.des)
                    setDiscount({
                        "label": res.discount === true ? "True" : "False",
                        "value": res.discount
                    })
                    setStock({
                        "label": res.stock === true ? "True" : "False",
                        "value": res.stock
                    })

                    setCategory({
                        "value": res?.category?._id,
                        "label": res?.category?.categoryName
                    })
                    setBrand({
                        "value": res?.brand?._id,
                        "label": res?.brand?.brandName
                    })
                    setRemark({
                        "value": res.remark,
                        "label": res.remark
                    })

                }
            })

            await CategoryListRequest()
            await BrandListRequest()
        })()
    }, [])



    let simplifiedCategoryList = CategoryList.map(category => {
        return {
            "value": category._id,
            "label": category.categoryName
        };
    });

    let simplifiedBrandList = BrandList.map(brand => {
        return {
            "value": brand._id,
            "label": brand.brandName
        };
    });









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


    let UpdateProduct = async () => {
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
        let categoryID = category?.value
        let brandID = brand?.value
        discount = discount?.value
        stock = stock?.value
        remark = remark?.value

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
            await UpdateProductRequest({ title, shortDes, price, discount, discountPrice, img1, img2, img3, img4, img5, img6, img7, img8, stock, remark, des, color, size, categoryID, brandID }, id).then((res) => {
                if (res) {
                    SuccessToast("Product update successfully!")
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
                <h2 className="text-[26px] text-gray-700 font-medium pb-[20px]">Update Product:</h2>
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

                            <Select
                                defaultValue={discount}
                                value={discount}
                                onChange={handleDiscount}
                                options={
                                    [{ value: true, label: 'True' },
                                    { value: false, label: 'False' }]
                                }


                            />
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

                            <Select
                                defaultValue={category}
                                value={category}
                                onChange={handleCategory}
                                options={simplifiedCategoryList}
                            />

                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Brand*
                        </label>
                        <div >


                            <Select
                                defaultValue={brand}
                                value={brand}
                                onChange={handleBrand}
                                options={simplifiedBrandList}
                            />
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

                            <Select
                                defaultValue={remark}
                                value={remark}
                                onChange={handleRemark}
                                options={
                                    [
                                        { value: "New", label: 'New' },
                                        { value: "Old", label: 'Old' },
                                        { value: "New Arrival", label: 'New Arrival' },
                                        { value: "Latest Model", label: 'Latest Model' },
                                        { value: "Limited Edition", label: 'Limited Edition' },
                                        { value: "Vintage", label: 'Vintage' },
                                        { value: "Classic", label: 'Classic' },
                                        { value: "Reconditioned", label: 'Reconditioned' },

                                    ]
                                }


                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Stock?*
                        </label>
                        <div >
                            <Select
                                defaultValue={stock}
                                value={stock}
                                onChange={handleStock}
                                options={
                                    [{ value: true, label: 'True' },
                                    { value: false, label: 'False' }]
                                }


                            />
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
                <button className="my_btn" onClick={UpdateProduct}>Update product</button>
            </div>

        </div>
    )
}

export default UpdateProductInner