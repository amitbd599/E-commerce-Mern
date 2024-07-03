import axios from "axios";
import create from "zustand";

const ProductStore = create((set) => ({
  ProductList: null,
  ProductDetails: null,
  CategoryList: [],
  BrandList: [],


  // create-product
  CreateProductRequest: async (reqBody) => {
    let res = await axios.post("/api/create-product", reqBody, {
      withCredentials: true
    });
    return res?.data?.status === true


  },

  // update-product
  UpdateProductRequest: async (reqBody, id) => {
    let res = await axios.post("/api/update-product/" + id, reqBody, {
      withCredentials: true
    });
    return res?.data?.status === true


  },


  // read-product
  ProductListRequest_Feature: async (item, pageNo) => {
    let res = await axios.get("/api/read-product/" + item + "/" + pageNo);
    if (res?.data?.status === true) {
      set({ ProductList: res?.data });
    }
  },


  // delete-product
  ProductDeleteRequest: async (id) => {
    let res = await axios.delete("/api/delete-product/" + id);
    return res?.data?.status === true
  },


  // product-details
  ProductDetailsRequest: async (id) => {
    let res = await axios.get("/api/product-details/" + id, {
      withCredentials: true,
    });
    if (res?.data?.status === true) {
      return res?.data?.data[0]
    }
  },


  // read-category-list
  CategoryListRequest: async () => {
    let res = await axios.get("/api/read-category-list");
    if (res?.data?.status === true) {
      set({ CategoryList: res?.data?.data });
    }
  },

  // create-category-list
  CreateCategoryRequest: async (reqBody) => {
    let res = await axios.post("/api/create-category-list", reqBody, {
      withCredentials: true,
    });
    return res?.data?.status === true
  },

  // read-single-category
  CategorySingleRequest: async (id) => {
    let res = await axios.get("/api/read-single-category/" + id);
    if (res?.data?.status === true) {
      return res?.data?.data[0]
    }
  },


  // delete-category-list
  DeleteCategoryRequest: async (id) => {
    let res = await axios.delete("/api/delete-category-list/" + id);
    return res?.data?.status === true
  },


  // update-category-list
  UpdateCategoryRequest: async (reqBody, id) => {
    let res = await axios.post("/api/update-category-list/" + id, reqBody, {
      withCredentials: true,
    });
    return res?.data?.status === true
  },


  // read-brand-list
  BrandListRequest: async () => {
    let res = await axios.get("/api/read-brand-list");
    if (res?.data?.status === true) {
      set({ BrandList: res?.data?.data });
    }
  },

  // read-single-brand
  BrandSingleRequest: async (id) => {
    let res = await axios.get("/api/read-single-brand/" + id);
    if (res?.data?.status === true) {
      return res?.data?.data[0]
    }
  },

  // delete-brand-list
  DeleteBrandRequest: async (id) => {
    let res = await axios.delete("/api/delete-brand-list/" + id);
    return res?.data?.status === true
  },

  // create-brand-list
  CreateBrandRequest: async (reqBody) => {
    let res = await axios.post("/api/create-brand-list", reqBody, {
      withCredentials: true,
    });
    return res?.data?.status === true
  },

  // update-brand-list
  UpdateBrandRequest: async (reqBody, id) => {
    let res = await axios.post("/api/update-brand-list/" + id, reqBody, {
      withCredentials: true,
    });
    return res?.data?.status === true
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
