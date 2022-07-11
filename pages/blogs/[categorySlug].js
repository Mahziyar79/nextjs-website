import axios from "axios";
import DesktopCategory from "../../components/DesktopCategory";
import DesktopNavSort from "../../components/DesktopNavSort";
import MobileCategory from "../../components/MobileCategory";
import PostList from "../../components/PostList";
import queryString from "query-string"

export default function CategorySlug({ postCategories, posts }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
        <div className="grid gap-8 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] pt-4">
          <DesktopCategory postCategories={postCategories} />
          <MobileCategory postCategories={postCategories} />
          <DesktopNavSort />
          <PostList posts={posts.data.docs} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
    const {query} = context
  const { data: postCategories } = await axios.get(
    "http://localhost:5000/api/post-category"
  );
  const { data: posts } = await axios.get(
    `http://localhost:5000/api/posts?${queryString.stringify(query)}`
  );
  return {
    props: {
      postCategories,
      posts,
    },
  };
}
