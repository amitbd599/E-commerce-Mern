import { useEffect, useRef } from "react"
import FeatureStore from "../store/FeatureStore"
import { useNavigate, useParams } from "react-router-dom"
import { ErrorToast, IsEmpty, SuccessToast } from "../helper/Helper"


const UpdateFeatureInner = () => {

    let { SingleFeatureRequest, UpdateFeatureRequest } = FeatureStore()
    let { id } = useParams()

    useEffect(() => {
        (async () => {
            await SingleFeatureRequest(id).then((res) => {
                if (res) {
                    titleRef.value = res.title
                    sub_titleRef.value = res.sub_title
                    button_titleRef.value = res.button_title
                    button_linkRef.value = res.button_link
                    imgRef.value = res.img
                }

            })
        })()
    }, [])

    let { titleRef, sub_titleRef, button_titleRef, button_linkRef, imgRef } = useRef()

    let navigate = useNavigate()

    let UpdateFeatureFun = async () => {
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
            await UpdateFeatureRequest({ title, sub_title, button_title, button_link, img }, id).then((res) => {
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
                <button className="my_btn" onClick={UpdateFeatureFun}>Update feature product</button>
            </div>

        </div>
    )
}

export default UpdateFeatureInner