import { ClockIcon } from "@heroicons/react/outline";
import Link from "next/link";
import ToPersianDigits from "../components/ToPersinaDigits";
import PostInteraction from "./PostInteraction";

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <h2 className="mr-4 md:w-[400px]">مقاله ای در این دسته بندی وجود ندارد</h2>;
  }
  return (
    <div className="md:col-span-9 grid grid-cols-6 gap-8">
      {posts.map((blog, index) => {
        return (
          <div
            className="col-span-6 md:col-span-3 lg:col-span-2 bg-white flex flex-col rounded-3xl p-3 md:mx-0"
            key={index}
          >
            {/* Blog Image */}
            <div className="aspect-w-16 aspect-h-9 mb-3">
              <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
                <a>
                  <img
                    src={blog.coverImage}
                    className="rounded-2xl w-full h-full object-center object-cover"
                    alt="next image"
                  />
                </a>
              </Link>
            </div>
            {/* Blog Info */}
            <div className="bg-gray-50 rounded-2xl p-2 flex flex-col flex-1 justify-between w-full">
              <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
                <a>
                  <h2 className="mb-4 font-bold cursor-pointer">
                    {blog.title}
                  </h2>
                </a>
              </Link>
              {/* post info */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="rounded-full w-6 h-6 ml-2"
                      src="/images/authorImg.jpg"
                    />
                    <span className="text-sm">مهزیار گیلانپور</span>
                  </div>
                  <div className="text-xs px-2 py-1 rounded-xl bg-blue-100 text-blue-600 hover:text-blue-100 hover:bg-blue-600 transition-all duration-200 cursor-pointer">
                    <Link href={`/blogs/${blog.category.englishTitle}`}>
                      <a>
                        <span> {blog.category.title}</span>
                      </a>
                    </Link>
                  </div>
                </div>
                {/* blog interaction */}
                <div className="flex items-center justify-between mt-4">
                  <PostInteraction blog={blog} isSmall />
                  <div className="flex items-center text-[11px] text-gray-400">
                    <ClockIcon className="ml-1 w-4 h-4 stroke-gray-400" />
                    <span>زمان مطالعه :</span>
                    <span>{ToPersianDigits(blog.readingTime)}</span>
                    <span>دقیقه</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
