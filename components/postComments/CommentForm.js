const CommentForm = ({ commentValue , setCommentValue}) => {
  return (
    <form>
      <textarea
        placeholder="نظرت رو برام بنویس..."
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
        className="p-4 rounded shadow-sm border-none my-4 w-full ring-2 ring-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button className="mt-4 p-3 bg-violet-600 w-full sm:w-56 rounded-xl text-white md:text-lg">
        ارسال نظر
      </button>
    </form>
  );
};

export default CommentForm;
