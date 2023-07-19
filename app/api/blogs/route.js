import fs from "fs";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

async function handler() {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      cover_image: matterResult.data.cover_image,
      tags: matterResult.data.tags,
      links: matterResult.data.links,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
}

export async function GET(req, res) {
  const { searchParams } = new URL(req.url || "");
  const searchQuery = searchParams.get("query") || "";

  const blogs = await handler();
  let filteredPosts = blogs;

  if (searchQuery) {
    const lowercaseQuery = searchQuery.toLowerCase();
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.subtitle.toLowerCase().includes(lowercaseQuery)
    );
  }

  return NextResponse.json(filteredPosts);
}
