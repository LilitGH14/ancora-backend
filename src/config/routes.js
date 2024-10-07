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
    },
  ],
  PRODUCTS: [
    "/products",
    {
      GET_PRODUCTS: "/getProducts",
    },
  ],
};
export default ROUTES;
