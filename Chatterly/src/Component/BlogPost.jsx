import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const [blog, setBlog] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error("Error fetching blog post:", error));
  }, [params.id]);

  if (!blog) return <h2 className="text-2xl">Loading....</h2>;

  return (
    <div className="w-full text-center border border-red-400 rounded-lg overflow-hidden p-8 shadow-2xl hover:bg-red-200">
      <h2 className="text-2xl text-purple-600 mb-3 font-extrabold">
        Title: {blog.title}
      </h2>
      <img src={blog.image} alt={blog.title} className="mx-auto h-[400px]" />
      <p className="text-lg font-semibold text-pink-700">Description: {blog.description}</p>
      <p className="text-lg font-semibold text-purple-900">Price: ${blog.price}</p>
    </div>
  );
};

export default BlogPost;
