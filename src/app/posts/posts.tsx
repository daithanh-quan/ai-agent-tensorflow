"use client";

import React from "react";

import { useGetPosts } from "src/queries/post/list";

const Posts = () => {
  const { data } = useGetPosts<Response.PostList>();

  return (
    <div>
      <h1>Posts</h1>
      {data?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
