import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../Utilities/BaseUrl";

const ProductApi = createApi({
  reducerPath: "ProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getAddProduct: builder.query({
      query: () => `/ecom/product/offer`,
    }),
  }),
});
export const { useGetAddProductQuery } = ProductApi;
export default ProductApi;
