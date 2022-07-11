import {
  AnnotationIcon,
  BookmarkIcon,
  ClockIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const PostList = ({ posts }) => {
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
                  <div className="flex items-center gap-x-1">
                    <button className="bg-gray-200 p-0.5 rounded flex items-center gap-x-1">
                      <AnnotationIcon className="w-4 h-4 stroke-gray-500" />
                      <span className="text-xs text-gray-500 font-bold">
                        10
                      </span>
                    </button>
                    <button className="bg-red-100 p-0.5 rounded flex items-center gap-x-1">
                      <HeartIcon className="w-4 h-4 stroke-red-500" />
                      <span className="text-xs text-red-500 font-bold">
                        {blog.likesCount}
                      </span>
                    </button>
                    <button className="bg-blue-100 p-0.5 rounded flex items-center gap-x-1">
                      <BookmarkIcon className="w-4 h-4 stroke-blue-500" />
                    </button>
                  </div>
                  <div className="flex items-center text-[11px] text-gray-400">
                    <ClockIcon className="ml-1 w-4 h-4 stroke-gray-400" />
                    <span>زمان مطالعه :</span>
                    <span>{blog.readingTime}</span>
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
