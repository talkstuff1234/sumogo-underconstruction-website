import React from "react";
import BlogShowItem from "./BlogShowItem";
import Button from "../ui/Button";

function BlogShow() {
  return (
    <section className="w-full px-4 py-6">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="col-span-2 md:col-span-2 flex gap-4 flex-col items-center justify-center lg:hidden ">
            <div className="flex flex-col gap-4 items-center">
              <Button varient="lightGreen">From Farm to Snack</Button>
              <h1 className="text-[#002E12] font-semibold text-2xl text-center">
                Stories worth savoring
              </h1>
            </div>
          </div>
          <div className="col-span-2 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-3">
            <BlogShowItem />
            <BlogShowItem />
          </div>
          <div className="col-span-2 md:col-span-2 hidden lg:flex gap-4 flex-col items-center justify-center ">
            <div className="flex flex-col gap-4 items-start">
              <Button varient="lightGreen">From Farm to Snack</Button>
              <h1 className="text-[#002E12] font-semibold text-4xl">
                Stories worth savoring
              </h1>
              <Button varient="green">View our Blog</Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <BlogShowItem />
          <BlogShowItem />
          <BlogShowItem />
          <BlogShowItem />
        </div>
        <div className="flex justify-center lg:hidden">
          <Button varient="green">View our Blog</Button>
        </div>
      </div>
    </section>
  );
}

export default BlogShow;
