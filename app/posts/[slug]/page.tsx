import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import CustomDropdown from "@/components/Dropdown";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};
const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="max-w-2xl mx-auto">
      <CustomDropdown links={post.data.links} />
      <div className="my-12 text-center">
        <h1 className="text-3xl font-2xl">{post.data.title}</h1>
        <p className=" mt-2">{post.data.date}</p>
      </div>

      <article className="blog-content">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
