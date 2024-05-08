
import Link from "next/link";
import BlogPosts from "~/components/blog-posts";
import Footer from "~/components/footer";
import Hero from "~/components/home";
import { Navbar } from "~/components/navbar";

export default function HomePage() {
  return (
   <>
    <Navbar />
      <Hero />
      {/* <Content />
      <Comments /> */}
      <BlogPosts />
      <Footer />
   </>
  );
}
