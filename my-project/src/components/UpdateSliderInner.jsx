import { useEffect, useRef } from "react"
import SliderStore from "../store/SliderStore"
import { ErrorToast, SuccessToast } from "../helper/Helper"
import { useNavigate, useParams } from "react-router-dom"

const UpdateSliderInner = () => {
    let { SliderSingleRequest, UpdateSliderRequest } = SliderStore()
    let navigate = useNavigate()
    let params = useParams()
    let { titleRef, desRef, imgRef } = useRef()
    let id = params.id
    useEffect(() => {
        (async () => {
            await SliderSingleRequest(id).then((res) => {
                if (res) {
                    titleRef.value = res.title
                    desRef.value = res.des
                    imgRef.value = res.img
                }
            })
        })()

    }, [])


    let UpdateSlider = async () => {
        let title = titleRef.value
        let des = desRef.value
        let img = imgRef.value

        await UpdateSliderRequest({ title, des, img }, id).then((res) => {
            if (res) {
                SuccessToast("Slider update successfully!")
                navigate("/all-slider")
            } else {
                ErrorToast("Failed to update slider!")
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
                <button onClick={UpdateSlider} className="my_btn">Update slider</button>
            </div>

        </div>
    )
}

export default UpdateSliderInner