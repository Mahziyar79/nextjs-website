import Head from "next/head";
import Link from "next/link";
import Layout from "../containers/Layout";

export default function Home({ postCategories, posts }) {
  return (
    <Layout>
      <Head>
        <title>آموزش تخصصی برنامه نویسی وب</title>
      </Head>
      <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
        <h1 className="text-center">Go to Blog Page</h1>
        <Link href="/blogs">
          <a>
            <p className="text-center text-teal-600">Blog Page</p>
          </a>
        </Link>
      </div>
    </Layout>
  );
}
