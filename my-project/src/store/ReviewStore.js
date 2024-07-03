import axios from "axios";
import create from "zustand";

const ReviewStore = create((set) => ({
  isSubmit: false,
  reviewList: [],

  //! create-review-list
  ReviewListCreateRequest: async (reqBody) => {
    let res = await axios.post("/api/create-review-list", reqBody, {
      withCredentials: true,
    });
    return res?.data?.status === true;
  },

  //! read-single-review
  GetAllReviewByProductRequest: async (id) => {
    let res = await axios.get("/api/read-single-review/" + id, {
      withCredentials: true,
    });
    if (res?.data?.status === true) {
      set({ reviewList: res?.data?.data });
    }
  },

  //! read-review-list
  GetAllReviewRequest: async () => {
    let res = await axios.get("/api/read-review-list", {
      withCredentials: true,
    });
    if (res?.data?.status === true) {
      set({ reviewList: res?.data?.data });
    }
  },

  // delete-review-list
  ReviewDeleteRequest: async (id) => {
    let res = await axios.delete("/api/delete-review-list/" + id);
    return res?.data?.status === true
  },
}));

export default ReviewStore;
