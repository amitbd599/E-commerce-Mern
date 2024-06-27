import React from "react";
import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
    DialogBody,
    Dialog,
} from "@material-tailwind/react";
import { FaPlus, FaRegCopy, FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { DeleteAlert } from "../helper/Helper";
import FileStore from "../store/FileStore";

const ImageSpeedCall = ({ filename, id }) => {
    let { FileDeleteRequest } = FileStore()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const copyToClipboard = () => {
        const el = document.createElement("textarea");
        el.value = import.meta.env.VITE_APP_ORIGIN_HOST + "/api/uploads/" + filename;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        toast.success("CDN Link Copy Successful!");
    };


    const deleteFile = async (reqBody) => {
        await DeleteAlert(FileDeleteRequest, reqBody)
    }


    return (
        <div className="relative h-80 w-full">

            <div className="absolute bottom-0 right-0">
                <SpeedDial>
                    <SpeedDialHandler>
                        <IconButton size="md" className="rounded-full">
                            <FaPlus className="fa-regular fa-plus h-5 w-5 transition-transform group-hover:rotate-45" />
                        </IconButton>
                    </SpeedDialHandler>
                    <SpeedDialContent >
                        <button onClick={() => deleteFile({ filename: filename, _id: id })}>
                            <SpeedDialAction className="relative" >
                                <FaRegTrashAlt className="fa-sharp fa-regular fa-trash h-5 w-5 text-card" />
                            </SpeedDialAction>
                        </button>

                        <button onClick={copyToClipboard}>
                            <SpeedDialAction className="relative ">
                                <FaRegCopy className="fa-light fa-copy h-5 w-5 text-card" />
                            </SpeedDialAction>
                        </button>
                    </SpeedDialContent>
                </SpeedDial>
            </div>
            <Dialog
                size="xl"
                open={open}
                handler={handleOpen}
                className="overflow-hidden rounded-xl"
            >
                <DialogBody className=" p-0">
                    <img
                        alt="nature"
                        className="h-[48rem] w-full  object-cover object-center"
                        src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
                    />
                </DialogBody>
            </Dialog>
        </div>
    );
};

export default ImageSpeedCall;