import { useRef } from "react"
import SliderStore from "../store/SliderStore"
import { ErrorToast, SuccessToast } from "../helper/Helper"
import { useNavigate } from "react-router-dom"

const CreateSliderInner = () => {
    let { CreateSliderRequest } = SliderStore()
    let navigate = useNavigate()
    let { titleRef, desRef, imgRef } = useRef()

    let SubmitSlider = async () => {
        let title = titleRef.value
        let des = desRef.value
        let img = imgRef.value

        await CreateSliderRequest({ title, des, img }).then((res) => {
            if (res) {
                SuccessToast("Slider created successfully!")
                navigate("/all-slider")
            } else {
                ErrorToast("Failed to create slider!")
            }
        })
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
                <div className="col-span-6">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Description*
                        </label>
                        <input
                            ref={(input) => desRef = input}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div className="col-span-12">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Image CDN-1 *
                        </label>
                        <input
                            ref={(input) => imgRef = input}
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>


            </div>
            <div className="mt-[20px]">
                <button onClick={SubmitSlider} className="my_btn">Create slider</button>
            </div>

        </div>
    )
}

export default CreateSliderInner