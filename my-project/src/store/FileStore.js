import axios from "axios";
import create from "zustand";

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
}));

export default FileStore;
