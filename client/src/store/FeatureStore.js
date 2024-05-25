

import axios from 'axios';
import create from "zustand"
const apiUrl = process.env.REACT_APP_API_URL;


const FeatureStore = create((set)=>({

  FeatureList: [],
  FeatureListRequest: async()=>{
    let res = await axios.get(apiUrl + "/read-features-list")
    if(res?.data?.status=== true){
      set({FeatureList: res?.data?.data})
    }
  }


}))


export default FeatureStore;