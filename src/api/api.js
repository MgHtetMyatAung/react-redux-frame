// src/api/api.js
import { createApi } from "@reduxjs/toolkit/query/react";
import { endpointsConfig } from "./endpoints";
import { getToken } from "../utils/api/token";
import { customBaseQuery } from "./baseQuery";

const createEndpoints = (builder) => {
  const endpoints = {};

  endpointsConfig.forEach(
    ({ name, path, method, access_token, providesTags, invalidatesTags }) => {
      const queryFn = (arg) => {
        let resolvedPath = path;

        // Replace path parameters with actual values from arg
        if (arg) {
          Object.keys(arg).forEach((key) => {
            resolvedPath = resolvedPath.replace(`:${key}`, arg[key]);
          });
        }

        return {
          url: resolvedPath,
          method,
          body: method === "POST" || method === "PUT" ? arg : undefined,
          headers: access_token
            ? { Authorization: `Bearer ${getToken()}` }
            : {},
        };
      };

      if (method === "GET") {
        endpoints[name] = builder.query({
          query: queryFn,
          providesTags: providesTags ? providesTags : [],
        });
      } else {
        endpoints[name] = builder.mutation({
          query: queryFn,
          invalidatesTags: invalidatesTags ? invalidatesTags : [],
        });
      }
    }
  );

  return endpoints;
};

export const api = createApi({
  baseQuery: customBaseQuery,
  endpoints: (builder) => createEndpoints(builder),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useGetProductReviewsQuery,
  useUpdateProductReviewMutation,
} = api;
