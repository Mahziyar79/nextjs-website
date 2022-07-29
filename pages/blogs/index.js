import axios from "axios";
import Head from "next/head";
import DesktopCategory from "../../components/DesktopCategory";
import DesktopNavSort from "../../components/DesktopNavSort";
import MobileCategory from "../../components/MobileCategory";
import PostList from "../../components/PostList";
import Layout from "../../containers/Layout";

export default function Home({ postCategories, posts }) {
  return (
    <Layout>
      <Head>
        <title>بلاگ</title>
      </Head>
      <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
        <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] pt-4">
          <DesktopCategory postCategories={postCategories} />
          <MobileCategory postCategories={postCategories} />
          <DesktopNavSort />
          <PostList posts={posts.data.docs} />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { data: postCategories } = await axios.get(
    "http://localhost:5000/api/post-category"
  );
  const { data: posts } = await axios.get(
    "http://localhost:5000/api/posts?page=1&limit=10"
  );
  return {
    props: {
      postCategories,
      posts,
    },
  };
}
