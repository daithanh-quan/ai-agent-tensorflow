"use client";

import React from "react";

import Link from "next/link";

import { useGetPosts } from "src/queries/post/list";

const InfoPosts = () => {
  const { data: posts } = useGetPosts<Response.PostList>();

  return (
    <div>
      {posts?.map((post) => <div key={post.id}>{post.title}</div>)}
      <Link href="/posts/2">Posts</Link>
    </div>
  );
};

export default InfoPosts;
