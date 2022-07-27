import { UserCircleIcon, UserIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { ToLocalDate } from "../../utils/ToLocalDate";
import CommentForm from "./CommentForm";

const SingleComment = ({ comment }) => {
  const [onReply, setOnReply] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  return (
    <div className="border border-gray-300 rounded-md p-2 md:p-4 my-3">
      <div className="flex items-center gap-x-4 text-slate-600">
        <UserCircleIcon className="h-12 w-12 stroke-1" />
        <div className="flex flex-col gap-y-1">
          <span>{comment.writer?.name}</span>
          <span>{ToLocalDate(comment.createdAt)}</span>
        </div>
      </div>
      <div className="p-3">
        {comment.content}
        <button className="block mt-4" onClick={() => setOnReply(!onReply)}>
          {onReply ? (
            <p className="text-red-400 text-sm">بیخیال</p>
          ) : (
            <p className="text-blue-400 text-sm">پاسخ</p>
          )}
        </button>
        {onReply && (
          <div className="mt-6">
            <span>در حال پاسخ به {comment.writer?.name}</span>
            <CommentForm
              commentValue={commentValue}
              setCommentValue={setCommentValue}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleComment;
