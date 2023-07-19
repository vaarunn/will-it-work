import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

const getPostMetadata = (searchQuery?: string,tags?:string[]): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  console.log(files)
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      cover_image: matterResult.data.cover_image,
      tags:matterResult.data.tags,
      slug: fileName.replace(".md", ""),

    };
  });


  let filteredPosts = posts;

  if (searchQuery) {
    const lowercaseQuery = searchQuery.toLowerCase();
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.subtitle.toLowerCase().includes(lowercaseQuery)
    );
  }

  if (tags && tags.length > 0) {
    filteredPosts = filteredPosts.filter((post) =>
      tags.every((tag) => post.tags.includes(tag))
    );
  }

  return filteredPosts;


};

export default getPostMetadata;
