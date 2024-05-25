

import axios from 'axios';
import create from "zustand"
const apiUrl = process.env.REACT_APP_API_URL;


const ProductStore = create((set)=>({

  ProductList: [],
  ProductListRequest_Feature: async()=>{
    let res = await axios.get(apiUrl + "/read-product/8/1")
    console.log(res?.data);
    if(res?.data?.status=== true){
      set({ProductList: res?.data?.products})
    }
  },

  Products: [],
  ProductsRequest_Feature: async(id)=>{
    let res = await axios.get(apiUrl + "/product-details/" + id )
    console.log(res?.data);
    if(res?.data?.status=== true){
      set({Products: res?.data?.products})
    }
  }


}))


export default ProductStore;