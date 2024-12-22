"use client";

import React from "react";

import { useGetPosts } from "src/queries/post/list";

const InfoPosts = () => {
  const { data: posts } = useGetPosts<Response.PostList>();

  return <div>{posts?.length}</div>;
};

export default InfoPosts;
