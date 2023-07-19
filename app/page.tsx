"use client";
import { useEffect, useState } from "react";
import PostPreview from "../components/PostPreview";
import { blogPreview, BlogPreview } from "@/posts/blogPreview";

const HomePage = () => {
  const [query, setQuery] = useState<string>("");
  const [filteredPosts, setFilteredPosts] =
    useState<BlogPreview[]>(blogPreview);

  useEffect(() => {
    filterPosts();
  }, [query]);

  const filterPosts = () => {
    if (!query.trim()) {
      setFilteredPosts(blogPreview);
    } else {
      const lowercaseQuery = query.toLowerCase();
      const filtered = blogPreview.filter(
        (post) =>
          post.title.toLowerCase().includes(lowercaseQuery) ||
          post.subtitle.toLowerCase().includes(lowercaseQuery) ||
          post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
      );
      setFilteredPosts(filtered);
    }
  };

  const postPreviews = filteredPosts.map((post) => (
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
        placeholder="Search by title or tag..."
        className="text-black"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {postPreviews}
      </div>
    </>
  );
};

export default HomePage;
