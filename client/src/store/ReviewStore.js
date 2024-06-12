import axios from 'axios';
import create from 'zustand';
const apiUrl = process.env.REACT_APP_API_URL;

const ReviewStore = create((set) => ({
  ReviewList: null,
  ReviewListRequest: async () => {
    let res = await axios.get(apiUrl + '/read-review-list');
    if (res?.data?.status === true) {
      set({ ReviewList: res?.data?.data });
    }
  },
}));

export default ReviewStore;
