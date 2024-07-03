import { useRef } from "react"
import FeatureStore from "../store/FeatureStore"
import { ErrorToast, IsEmpty, SuccessToast } from "../helper/Helper"
import { useNavigate } from "react-router-dom"


const CreateFeatureInner = () => {
    let { titleRef, sub_titleRef, button_titleRef, button_linkRef, imgRef } = useRef()
    let { CreateFeatureRequest } = FeatureStore()
    let navigate = useNavigate()

    let CreateFeatureFun = async () => {
        let title = titleRef.value;
        let sub_title = sub_titleRef.value;
        let button_title = button_titleRef.value;
        let button_link = button_linkRef.value;
        let img = imgRef.value;
        if (IsEmpty(title)) {
            ErrorToast("Title is required!")
            return true
        }
        else if ((IsEmpty(sub_title))) {
            ErrorToast("Sub title is required!")
            return true
        }
        else if ((IsEmpty(button_title))) {
            ErrorToast("Button title is required!")
            return true
        }
        else if ((IsEmpty(button_link))) {
            ErrorToast("Button link is required!")
            return true
        }
        else if ((IsEmpty(img))) {
            ErrorToast("Img is required!")
            return true
        } else {
            await CreateFeatureRequest({ title, sub_title, button_title, button_link, img }).then((res) => {
                if (res) {
                    SuccessToast("Feature created successfully!")
                    navigate("/all-feature")
                } else {
                    ErrorToast("Something went wrong!")
                }
            })
        }
    }


    return (
        <div className=" bg-white p-[20px] rounded-lg">
            <div>
                <h2 className="text-[26px] text-gray-700 font-medium pb-[20px]">Create Feature Product:</h2>
            </div>
            <div className="grid grid-cols-12 gap-[20px]">
                <div className="col-span-6">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Title*
                        </label>
                        <input
                            ref={(input => titleRef = input)}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div className="col-span-6">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Sub title*
                        </label>
                        <input
                            ref={(input => sub_titleRef = input)}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>

                <div className="col-span-4">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Button title*
                        </label>
                        <input
                            ref={(input => button_titleRef = input)}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Button link*
                        </label>
                        <input
                            ref={(input => button_linkRef = input)}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Image CDN *
                        </label>
                        <input
                            ref={(input => imgRef = input)}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-[60px]">
                <button className="my_btn" onClick={CreateFeatureFun}>Create new feature product</button>
            </div>

        </div>
    )
}

export default CreateFeatureInner