import axios from 'axios';
import create from 'zustand';

const SliderStore = create((set) => ({
  SliderList: null,


  SliderListRequest: async () => {
    let res = await axios.get('/api/read-slider-list', {
      withCredentials: true,
    });
    if (res?.data?.status === true) {
      set({ SliderList: res?.data?.data });
    }
  },

  CreateSliderRequest: async (reqBody) => {
    let res = await axios.post('/api/create-slider-list', reqBody, {
      withCredentials: true,
    });
    return res?.data?.status === true
  },
}));

export default SliderStore;
