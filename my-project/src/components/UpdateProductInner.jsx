
import { Select, Option } from "@material-tailwind/react";
import Editor from "../helper/Editor";
import { useState } from "react";
const UpdateProductInner = () => {
    const [editorData, setEditorData] = useState("");
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
                            <Select label="Select Version" className="h-[55px] flex items-center">
                                <Option>True</Option>
                                <Option>False</Option>
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
                            <Select label="Select Version" className="h-[55px] flex items-center">
                                <Option>True</Option>
                                <Option>False</Option>
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
                            <Select label="Select Version" className="h-[55px] flex items-center">
                                <Option>True</Option>
                                <Option>False</Option>
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
                            <Select label="Select Version" className="h-[55px] flex items-center">
                                <Option>New</Option>
                                <Option>Old</Option>
                                <Option>Top</Option>
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
                            <Select label="Select Version" className="h-[55px] flex items-center">
                                <Option>True</Option>
                                <Option>False</Option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="col-span-12">
                    <div className="grid gap-2">
                        <label className="mb-2 text-sm text-start text-grey-900">
                            Short Description *
                        </label>
                        <textarea rows={4} name="" id="" className="input_inner"></textarea>
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
            <div className="mt-[60px]">
                <button className="my_btn">Create new product</button>
            </div>

        </div>
    )
}

export default UpdateProductInner