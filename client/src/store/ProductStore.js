

import axios from 'axios';
import create from "zustand"
const apiUrl = process.env.REACT_APP_API_URL;


const ProductStore = create((set)=>({

  ProductList: [],
  ProductListRequest_Feature: async(item, pageNo)=>{
    let res = await axios.get(apiUrl + "/read-product/"+ item + "/" + pageNo)
    if(res?.data?.status=== true){
      set({ProductList: res?.data})
    }
  },

  Products: [],
  ProductsRequest_Feature: async(id)=>{
    let res = await axios.get(apiUrl + "/product-details/" + id )
    if(res?.data?.status=== true){
      set({Products: res?.data?.data[0]})
    }
  },

  CategoryList: [],
  CategoryListRequest: async()=>{
    let res = await axios.get(apiUrl + "/read-category-list" )
    if(res?.data?.status=== true){
      set({CategoryList: res?.data?.data})
    }
  },

  BrandList: [],
  BrandListRequest: async()=>{
    let res = await axios.get(apiUrl + "/read-brand-list" )
    if(res?.data?.status=== true){
      set({BrandList: res?.data?.data})
    }
  },

  RemarkList: [],
  RemarkListRequest: async(remark)=>{
    let res = await axios.get(apiUrl + "/product-list-by-remark/"+ remark )
    if(res?.data?.status=== true){
      set({RemarkList: res?.data?.data})
    }
  },


  SimilarCategoryListRequest: async(id, item, pageNo)=>{
    let res = await axios.get(apiUrl + "/product-list-by-similar-category/"+ id + "/" + item + "/" + pageNo)
    if(res?.data?.status=== true){
      console.log(res?.data);
      set({ProductList: res?.data})
    }
  },


  SimilarBrandsListRequest: async(id)=>{
    let res = await axios.get(apiUrl + "/product-list-by-similar-brand/"+ id )
    if(res?.data?.status=== true){
      set({ProductList: res?.data?.data})
    }
  },

 
  SimilarStockListRequest: async(bool)=>{
    let res = await axios.get(apiUrl + "/product-list-by-stock/"+ bool )
    if(res?.data?.status=== true){
      set({ProductList: res?.data?.data})
    }
  },


  SimilarColorListRequest: async(value)=>{
    let res = await axios.get(apiUrl + "/product-list-by-color/"+ value )
    if(res?.data?.status=== true){
      set({ProductList: res?.data?.data})
    }
  },


}))


export default ProductStore;