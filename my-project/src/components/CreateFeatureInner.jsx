

const CreateFeatureInner = () => {
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
                            type="text"
                            className="input_inner"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-[60px]">
                <button className="my_btn">Create new feature product</button>
            </div>

        </div>
    )
}

export default CreateFeatureInner