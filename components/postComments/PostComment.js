import { useState } from "react";
import CommentForm from "./CommentForm";
import ReplyComments from "./ReplyComments";
import SingleComment from "./SingleComment";

const PostCommnet = ({ post }) => {
  const [commentValue, setCommentValue] = useState("");
  return (
    <div className="my-6">
      <h2>نظرات</h2>
      {post.comments.map((comment, index) => {
        return (
          !comment.responseTo &&
          comment.status === 2 && (
            <>
              <SingleComment comment={comment} />
              <ReplyComments
                comments={post.comments}
                parentCommentId={comment._id}
              />
            </>
          )
        );
      })}
      <h3 className="md:text-lg mt-8">ارسال دیدگاه جدید</h3>
      <CommentForm
        commentValue={commentValue}
        setCommentValue={setCommentValue}
      />
    </div>
  );
};

export default PostCommnet;
