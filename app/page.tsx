"use client";
import { useEffect, useState } from "react";
import PostPreview from "../components/PostPreview";
import { blogPreview, BlogPreview } from "@/posts/blogPreview";
import SearchBar from "@/components/SearchBar";

const HomePage = () => {
  const [query, setQuery] = useState<string>("");
  const [filteredPosts, setFilteredPosts] =
    useState<BlogPreview[]>(blogPreview);
  const [tagFilter, setTagFilter] = useState<string>("");

  useEffect(() => {
    filterPosts();
  }, [query, tagFilter]);

  const filterPosts = () => {
    if (!query.trim() && !tagFilter) {
      setFilteredPosts(blogPreview);
    } else {
      const lowercaseQuery = query.toLowerCase();
      const filtered = blogPreview.filter(
        (post) =>
          (post.title.toLowerCase().includes(lowercaseQuery) ||
            post.subtitle.toLowerCase().includes(lowercaseQuery)) &&
          (!tagFilter ||
            post.tags.some((tag) => tag.toLowerCase().includes(tagFilter)))
      );
      setFilteredPosts(filtered);
    }
  };

  const postPreviews = filteredPosts.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <SearchBar
        setQuery={setQuery}
        setTagFilter={setTagFilter}
        tagFilter={tagFilter}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {postPreviews}
      </div>
    </>
  );
};

export default HomePage;
