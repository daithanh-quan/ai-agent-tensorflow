import React, { Suspense } from "react";

import { Loader2 } from "lucide-react";

import InfoPosts from "./info-posts";

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      <Suspense fallback={<Loader2 className="animate-spin" />}>
        <InfoPosts />
      </Suspense>
    </div>
  );
};

export default Posts;
