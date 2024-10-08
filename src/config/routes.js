const ROUTES = {
  AUTH: [
    "/auth",
    {
      LOGIN: "/login",
    },
  ],
  PAYMENTS: [
    "/payments",
    {
      PAYPAL: "/paypal",
      STRIPE: "/stripe",
      GET_SALES: "/getSales",
    },
  ],
  PRODUCTS: [
    "/products",
    {
      GET_PRODUCTS: "/getProducts",
      ADD_PRODUCT: "/addProduct",
      UPDATE_PRODUCT: "/updateProduct/:id",
      DELETE_PRODUCT: "/deleteProduct/:id",
    },
  ],
  GENERAL: [
    "/general",
    {
      GET_METAS: "/getMetaData",
      UPDATE_META: "/updateMetaData",
    },
  ],
};
export default ROUTES;
