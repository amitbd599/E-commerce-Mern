import axios from 'axios';
import create from 'zustand';

const SliderStore = create((set) => ({
  SliderList: [],


  //! All slider
  SliderListRequest: async () => {
    let res = await axios.get('/api/read-slider-list', {
      withCredentials: true,
    });
    if (res?.data?.status === true) {
      set({ SliderList: res?.data?.data });
    }
  },

  //! single slider
  SliderSingleRequest: async (id) => {
    let res = await axios.get('/api/read-single-slider-list/' + id, {
      withCredentials: true,
    });
    if (res?.data?.status === true) {
      return res?.data?.data[0]
    }
  },

  //! create slider 
  CreateSliderRequest: async (reqBody) => {
    let res = await axios.post('/api/create-slider-list', reqBody, {
      withCredentials: true,
    });
    return res?.data?.status === true
  },

  //! delete slider 
  DeleteSliderRequest: async (id) => {
    let res = await axios.delete('/api/delete-slider-list/' + id, {
      withCredentials: true,
    });
    return res?.data?.status === true
  },


  //! update slider 
  UpdateSliderRequest: async (reqBody, id) => {
    let res = await axios.post('/api/update-slider-list/' + id, reqBody, {
      withCredentials: true,
    });
    return res?.data?.status === true
  },
}));

export default SliderStore;
