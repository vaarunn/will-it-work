"use client";
import { useEffect, useState } from "react";
import PostPreview from "../components/PostPreview";
import axios from "axios";

interface PostMetadata {
  title: string;
  date: string;
  subtitle: string;
  cover_image: string;
  tags: string[];
  links: string[];
  slug: string;
}

const HomePage = () => {
  const [postMetadata, setPostMetadata] = useState<PostMetadata[] | null>(null);
  const [query, setQuery] = useState<string>(""); // Assuming query is a string
  console.log(query);

  const getData = async () => {
    const response = await axios(`/api/blogs?query=${query}`);
    setPostMetadata(response.data);
  };

  useEffect(() => {
    getData();
  }, [query]);

  const postPreviews = postMetadata?.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="text-black"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {postPreviews}
      </div>
    </>
  );
};

export default HomePage;
