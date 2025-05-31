import React, { Suspense } from "react";

import Link from "next/link";

import { Loader2 } from "lucide-react";

import InfoPosts from "./info-posts";

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      <Link href="/posts/1">modal</Link>
      <Suspense fallback={<Loader2 className="animate-spin" />}>
        <InfoPosts />
      </Suspense>
    </div>
  );
};

export default Posts;
