"use client";

import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className=" rounded-t-xl  max-w-[400px] hover:shadow-white shadow-sm rounded-xl "
      key={props.title}
    >
      <Link href={`/posts/${props.slug}`}>
        <img
          className="rounded-t-xl "
          src={props.cover_image}
          alt={props.title}
        />
      </Link>
      <div className="p-4 bg-[#141414] text-[#b2b2b2] rounded-b-xl ">
        <h1 className="text-xl font-bold my-2">{props.title}</h1>

        <p className="text-sm my-2 bg-[#1d1d1d] inline-block border-2xl p-2  rounded-xl">
          {props.date}
        </p>

        <p className="text-[#848484] my-2">{props.subtitle}</p>

        <div className="flex gap-2 my-2">
          {props?.tags?.map((tag) => {
            return <p>#{tag}</p>;
          })}
        </div>

        <div className="flex gap-2 mt-6  mb-4">
          <img src="" alt="logo" />
          Truss Studios
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
