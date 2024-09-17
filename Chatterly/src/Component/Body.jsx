import React from "react";
import {Routes,Route, BrowserRouter} from "react-router-dom";
import BlogCard from "./BlogCard";
import BlogPost from "./BlogPost";

const Body = () => {
  return (
    <BrowserRouter>
      <div className="mt-10 shadow-md">
        <h1 className="font-serif font-bold ml-10">Blog Posts</h1>
        <div className="flex">
      
        </div>
      </div>
  
    <Routes>
    <Route path="/" element={<BlogCard/>}/>
        <Route path="/blog/:id" element={<BlogPost/>}/>
      
    </Routes>
    </BrowserRouter>
  );
};


export default Body;
