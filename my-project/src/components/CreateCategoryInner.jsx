import { useRef } from "react"
import ProductStore from "../store/ProductStore"
import { useNavigate } from "react-router-dom"
import { ErrorToast, IsEmpty, SuccessToast } from "../helper/Helper"


const CreateCategoryInner = () => {
    let { categoryNameRef, categoryImgRef } = useRef()
    let { CreateCategoryRequest } = ProductStore()
    let navigate = useNavigate()

    let CreateCategoryFun = async () => {
        let categoryName = categoryNameRef.value;
        let categoryImg = categoryImgRef.value;
        if (IsEmpty(categoryName)) {
            ErrorToast("Category Name is required!")
            return true
        }
        else if ((IsEmpty(categoryImg))) {
            ErrorToast("Image is required!")
            return true
        }
        else {
            await CreateCategoryRequest({ categoryName, categoryImg }).then((res) => {
                if (res) {
                    SuccessToast("Category created successfully!")
                    navigate("/all-category")
                } else {
                    ErrorToast("Something went wrong!")
                }
            })
        }
    }
    return (
        <div className=" bg-white p-[20px] rounded-lg">
            <div>
                <h2 className="text-[26px] text-gray-700 font-medium pb-[20px]">Create Category:</h2>
            </div>
            <div className="grid grid-cols-12 gap-[20px]">
                <div className="col-span-6">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Category name*
                        </label>
                        <input
                            ref={(ref) => categoryNameRef = ref}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div className="col-span-6">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Category image CDN*
                        </label>
                        <input
                            ref={(ref) => categoryImgRef = ref}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-[60px]">
                <button className="my_btn" onClick={CreateCategoryFun}>Create new category</button>
            </div>

        </div>
    )
}

export default CreateCategoryInner