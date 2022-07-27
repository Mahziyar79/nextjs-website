import React from "react";
import SingleComment from "./SingleComment";

const ReplyComments = ({ comments, parentCommentId }) => {
  return comments.map((comment) => {
    return (
      parentCommentId === comment.responseTo && (
        <div className="mr-5" key={comment._id}>
          <SingleComment comment={comment} />
          <ReplyComments
            comments={comments}
            parentCommentId={comment._id}
          />
        </div>
      )
    );
  });
};

export default ReplyComments;
