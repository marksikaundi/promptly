import BlogSummary from "@/features/home/blog-summary";
import { BlogPost } from "@/types/blog";

const collectionPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    excerpt:
      "Learn how to build modern web applications with Next.js, the React framework for production.",
    date: "June 1, 2023",
    slug: "getting-started-with-nextjs",
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS",
    excerpt:
      "Discover the power of utility-first CSS with Tailwind and create beautiful, responsive designs quickly.",
    date: "June 15, 2023",
    slug: "mastering-tailwind-css",
  },
  {
    id: "3",
    title: "The Future of Web Development",
    excerpt:
      "Explore emerging trends and technologies that are shaping the future of web development.",
    date: "July 1, 2023",
    slug: "future-of-web-development",
  },
];

export default function Blogs() {
  return (
    <main>
      <BlogSummary posts={collectionPosts} />
    </main>
  );
}
