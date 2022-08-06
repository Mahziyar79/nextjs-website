import {
  AnnotationIcon,
  BookmarkIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import {
  HeartIcon as HeartIconSolid,
  BookmarkIcon as SolideBookmarkIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import http from "../services/httpService";
import routerPush from "../utils/routerPush";

import ToPersianDigits from "../utils/ToPersinaDigits";

const PostInteraction = ({ blog, isSmall }) => {
  const router = useRouter();

  const likeHandler = (postId) => {
    http
      .put(`/posts/like/${postId}`)
      .then(({ data }) => {
        toast.success(data.message);
        routerPush(router);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
  };

  const bookmarkHandler = (postId) => {
    http
      .put(`/posts/bookmark/${postId}`)
      .then(({ data }) => {
        toast.success(data.message);
        routerPush(router);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
  };

  const iconSize = `${isSmall ? "w-4 h-4" : "w-6 h-6"}`;
  return (
    <div className={`flex items-center ${isSmall ? "gap-x-2" : "gap-x-4"}`}>
      <button
        className={`bg-gray-200 ${
          isSmall ? "p-0.5" : "p-1"
        } rounded flex items-center gap-x-1 text-gray-500`}
      >
        <AnnotationIcon className={`${iconSize} `} />
        <span className="text-xs text-gray-500 font-bold ">
          {ToPersianDigits(blog.commentsCount)}
        </span>
      </button>
      <button
        onClick={() => likeHandler(blog._id)}
        className={`bg-red-100 ${
          isSmall ? "p-0.5" : "p-1"
        } rounded flex items-center gap-x-1 text-red-500 hover:bg-red-500 hover:text-red-100 transition-all duration-150`}
      >
        {blog.isLiked ? (
          <HeartIconSolid className={`${iconSize} fill-current`} />
        ) : (
          <HeartIcon className={`${iconSize} stroke-current`} />
        )}
        <span className="text-xs font-bold">
          {ToPersianDigits(blog.likesCount)}
        </span>
      </button>
      <button
        onClick={() => bookmarkHandler(blog._id)}
        className={`bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white ${
          isSmall ? "p-0.5" : "p-1"
        } rounded flex items-center gap-x-1 transition-all duration-150 `}
      >
        {blog.isBookmarked ? (
          <SolideBookmarkIcon className={`${iconSize} fill-current`} />
        ) : (
          <BookmarkIcon className={`${iconSize} stroke-current`} />
        )}
      </button>
    </div>
  );
};

export default PostInteraction;
