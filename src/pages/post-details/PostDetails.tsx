// - - - - - - - - - - Libraries
import {useEffect} from "react";
import {useParams} from "react-router";

// - - - - - - - - - - Redux Files
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchPosts} from "../../features/posts/postSlice";

// - - - - - - - - - - PostDetails (Main Component)
const PostDetails = () => {
  // *** React Router Hook
  const params = useParams();

  // *** Redux Custom Hook
  const {posts} = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  // *** Post Search
  const post = posts.find((post) => post.id === params.id);

  // *** Handle Refresh Side Effect
  useEffect(() => {
    if (!post && posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [post, posts, dispatch]);

  // *** Return JSX
  return (
    <div className="post-details bg-gray-200 text-white p-5 rounded-md flex flex-col gap-3">
      <span className="bg-green-500 w-fit p-1.5 rounded-sm">Post Title</span>
      <div className="post-details-title bg-blue-500 p-1.5 rounded-sm">
        {post?.title}
      </div>
      <span className="bg-green-500 w-fit p-1.5 rounded-sm">
        Post Description
      </span>
      <div className="post-details-description bg-blue-500 p-1.5 rounded-sm">
        {post?.description}
      </div>
    </div>
  );
};

export default PostDetails;
