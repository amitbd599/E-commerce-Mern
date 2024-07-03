import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorToast, IsEmpty, SuccessToast } from "../helper/Helper";
import ProductStore from "../store/ProductStore";


const CreateBrandInner = () => {
    let { brandNameRef, brandImgRef } = useRef()
    let { CreateBrandRequest } = ProductStore()
    let navigate = useNavigate()

    let CreateBrandFun = async () => {
        let brandName = brandNameRef.value;
        let brandImg = brandImgRef.value;
        if (IsEmpty(brandName)) {
            ErrorToast("Brand Name is required!")
            return true
        }
        else if ((IsEmpty(brandImg))) {
            ErrorToast("Sub title is required!")
            return true
        }
        else {
            await CreateBrandRequest({ brandName, brandImg }).then((res) => {
                if (res) {
                    SuccessToast("Feature created successfully!")
                    navigate("/all-brand")
                } else {
                    ErrorToast("Something went wrong!")
                }
            })
        }
    }
    return (
        <div className=" bg-white p-[20px] rounded-lg">
            <div>
                <h2 className="text-[26px] text-gray-700 font-medium pb-[20px]">Create Brand:</h2>
            </div>
            <div className="grid grid-cols-12 gap-[20px]">
                <div className="col-span-6">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Brand name*
                        </label>
                        <input
                            ref={(input) => brandNameRef = input}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div className="col-span-6">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Brand image CDN*
                        </label>
                        <input
                            ref={(input) => brandImgRef = input}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-[60px]">
                <button className="my_btn" onClick={CreateBrandFun}>Create new brand</button>
            </div>

        </div>
    )
}

export default CreateBrandInner