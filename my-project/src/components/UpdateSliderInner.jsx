
const UpdateSliderInner = () => {
    return (
        <div className=" bg-white p-[20px] rounded-lg">
            <div>
                <h2 className="text-[26px] text-gray-700 font-medium pb-[20px]">Update Slider:</h2>
            </div>
            <div className="grid gap-[5px]">
                <div>
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Update Title*
                        </label>
                        <input
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div>
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Update Image*
                        </label>
                        <input
                            type="file"
                            className="input_inner"
                        />
                    </div>
                </div>
                <div>
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Update  Description*
                        </label>
                        <textarea rows={12} name="" id="" className="input_inner"></textarea>

                    </div>
                </div>
                <div>
                    <button className="my_btn">Create Slider</button>
                </div>
            </div>

        </div>
    )
}

export default UpdateSliderInner