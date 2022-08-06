import axios from "axios";
import Head from "next/head";
import DesktopCategory from "../../components/DesktopCategory";
import DesktopNavSort from "../../components/DesktopNavSort";
import MobileCategory from "../../components/MobileCategory";
import PostList from "../../components/PostList";
import Layout from "../../containers/Layout";
import http from "../../services/httpService";
import queryString from "query-string";
import Pagination from "@mui/material/Pagination";

export default function Home({ postCategories, posts }) {
  // console.log(posts.data.totalPages);
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
          <PostList posts={posts.data} />
          
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({req,query}) {
  const { data: postCategories } = await http.get(
    "/post-category"
  );
  const { data: posts } = await http.get(
    `/posts?${queryString.stringify(query)}` , {
      headers : {
        Cookie : req.headers.cookie || " "
      }
    }
  );
  return {
    props: {
      postCategories,
      posts,
    },
  };
}
