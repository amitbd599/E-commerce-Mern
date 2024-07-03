

import axios from 'axios';
import create from "zustand"


const FeatureStore = create((set) => ({
  FeatureList: [],

  // read-features-list
  FeatureListRequest: async () => {
    let res = await axios.get('/api/read-features-list');
    if (res?.data?.status === true) {
      set({ FeatureList: res?.data?.data });
    }
  },
  // read-single-features
  SingleFeatureRequest: async (id) => {
    let res = await axios.get('/api/read-single-features/' + id);
    if (res?.data?.status === true) {
      return res?.data?.data[0]
    }
  },

  // create-features-list
  CreateFeatureRequest: async (reqBody) => {
    let res = await axios.post('/api/create-features-list', reqBody, {
      withCredentials: true,
    });
    return res?.data?.status === true
  },

  // update-features-list
  UpdateFeatureRequest: async (reqBody, id) => {
    let res = await axios.post('/api/update-features-list/' + id, reqBody, {
      withCredentials: true,
    });
    return res?.data?.status === true
  },

  // delete-features-list
  FeatureDeleteRequest: async (id) => {
    let res = await axios.delete("/api/delete-features-list/" + id);
    return res?.data?.status === true
  },
}));


export default FeatureStore;