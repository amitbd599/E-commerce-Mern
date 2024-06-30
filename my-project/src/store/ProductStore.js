import axios from "axios";
import create from "zustand";
const apiUrl = process.env.REACT_APP_API_URL;

const ProductStore = create((set) => ({
  ProductList: null,
  ProductDetails: null,
  CategoryList: [],
  BrandList: [],


  CreateProductRequest: async (reqBody) => {
    let res = await axios.post("/api/create-product", reqBody, {
      withCredentials: true
    });
    return res?.data?.status === true


  },


  ProductListRequest_Feature: async (item, pageNo) => {
    let res = await axios.get("/api/read-product/" + item + "/" + pageNo);
    if (res?.data?.status === true) {
      set({ ProductList: res?.data });
    }
  },

  ProductDetailsRequest: async (id) => {
    let res = await axios.get(apiUrl + "/product-details/" + id);
    if (res?.data?.status === true) {
      set({ ProductDetails: res?.data?.data[0] });
    }
  },

  CategoryListRequest: async () => {
    let res = await axios.get("/api/read-category-list");
    if (res?.data?.status === true) {
      set({ CategoryList: res?.data?.data });
    }
  },

  BrandListRequest: async () => {
    let res = await axios.get("/api/read-brand-list");
    if (res?.data?.status === true) {
      set({ BrandList: res?.data?.data });
    }
  },

  RemarkListRequest: async (remark, item, pageNo) => {
    let res = await axios.get(
      apiUrl + "/product-list-by-remark/" + remark + "/" + item + "/" + pageNo
    );
    if (res?.data?.status === true) {
      set({ ProductList: res?.data });
    }
  },

  SimilarCategoryListRequest: async (id, item, pageNo) => {
    let res = await axios.get(
      apiUrl +
      "/product-list-by-similar-category/" +
      id +
      "/" +
      item +
      "/" +
      pageNo
    );
    if (res?.data?.status === true) {
      set({ ProductList: res?.data });
    }
  },

  SimilarBrandsListRequest: async (id, item, pageNo) => {
    let res = await axios.get(
      apiUrl +
      "/product-list-by-similar-brand/" +
      id +
      "/" +
      item +
      "/" +
      pageNo
    );
    if (res?.data?.status === true) {
      set({ ProductList: res?.data });
    }
  },

  SimilarStockListRequest: async (bool, item, pageNo) => {
    let res = await axios.get(
      apiUrl + "/product-list-by-stock/" + bool + "/" + item + "/" + pageNo
    );
    if (res?.data?.status === true) {
      set({ ProductList: res?.data });
    }
  },

  SimilarColorListRequest: async (value, item, pageNo) => {
    let res = await axios.get(
      apiUrl + "/product-list-by-color/" + value + "/" + item + "/" + pageNo
    );
    if (res?.data?.status === true) {
      set({ ProductList: res?.data });
    }
  },
}));

export default ProductStore;
