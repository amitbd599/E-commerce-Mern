import axios from "axios";
import create from "zustand";
import { unAuthorize } from "../helper/Helper";

const FileStore = create((set) => ({
    isSubmit: false,
    fileList: [],

    // get all file
    GetFileRequest: async (item, pageNo) => {
        let res = await axios.get("/api/all-file/" + item + "/" + pageNo, {
            withCredentials: true,
        });
        if (res?.data?.status === true) {
            set({ fileList: res?.data });
        }
    },

    //! delete cart list
    FileDeleteRequest: async (reqBody) => {
        console.log(reqBody);
        try {
            let res = await axios.delete("/api/remove", reqBody, {
                withCredentials: true,
            });

            return res?.data?.status === true;
        } catch (e) {
            unAuthorize(e.response.status);
        }
    },
}));

export default FileStore;
