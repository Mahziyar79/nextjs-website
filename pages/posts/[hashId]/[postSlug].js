import axios from "axios";

const PostPage = ({post}) => {
    const {data : postInfo} = post;
    return ( 
        <div>
            <h1>{postInfo.title}</h1>
        </div>
     );
}
 
export default PostPage;



export async function getServerSideProps(ctx) {
    const {params} = ctx;
    const { data: post } = await axios.get(
      `http://localhost:5000/api/posts/${params.postSlug}`
    );

    return {
      props: {
        post,
      },
    };
  }
  