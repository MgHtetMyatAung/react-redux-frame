export const endpointsConfig = [
  {
    name: "getUsers",
    path: "/users",
    method: "GET",
    access_token: false,
    providesTags: ["Users"],
  },
  {
    name: "getUserById",
    path: "/users/:id",
    method: "GET",
    access_token: true,
    providesTags: (result, error, id) => [{ type: "User", id }],
  },
  {
    name: "createUser",
    path: "/users",
    method: "POST",
    access_token: true,
    invalidatesTags: ["Users"],
  },
  {
    name: "getProductReviews",
    path: "/products/:productId/reviews/:reviewId",
    method: "GET",
    access_token: true,
    providesTags: (result, error, { productId, reviewId }) => [
      { type: "ProductReview", productId, reviewId },
    ],
  },
  {
    name: "updateProductReview",
    path: "/products/:productId/reviews/:reviewId",
    method: "PUT",
    access_token: true,
    invalidatesTags: (result, error, { productId, reviewId }) => [
      { type: "ProductReview", productId, reviewId },
    ],
  },
  // Add more endpoints as needed
];
