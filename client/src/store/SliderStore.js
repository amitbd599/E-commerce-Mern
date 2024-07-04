import axios from 'axios';
import create from 'zustand';
const apiUrl = process.env.REACT_APP_API_URL;

const SliderStore = create((set) => ({
  SliderList: null,
  SliderListRequest: async () => {
    let res = await axios.get(apiUrl + '/read-slider-list', {
      withCredentials: true,
    });
    if (res?.data?.status === true) {
      set({ SliderList: res?.data?.data });
    }
  },
}));

export default SliderStore;
