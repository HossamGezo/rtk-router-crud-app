// - - - - - - - - - - Libraries
import {useEffect} from "react";
import {Link} from "react-router";

// - - - - - - - - - - Components
import Button from "../../components/button/Button";

// - - - - - - - - - - Redux
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchPosts, deletePost} from "../../features/posts/postSlice";

// - - - - - - - - - - Home (Main Component)
const Home = () => {
  // *** Redux Custom Hooks
  const {loading, posts, error} = useAppSelector((state) => state.posts);
  const {isLoggedIn} = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  // *** Dispatch Posts
  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts]);
  // *** Delete Post
  const handleDelete = (postId: string, postTitle: string) => {
    if (confirm(`Do you really want to delete the post titled "${postTitle}"?`))
      dispatch(deletePost(postId));
  };
  // *** Return JSX
  return (
    <div className="posts-list bg-gray-200 sm:rounded-md h-[70vh]">
      <h1 className="posts-list-head text-center text-2xl md:text-3xl lg:text-4xl text-[#333] font-medium select-none py-5">
        POSTS
      </h1>
      <div className="posts relative px-5 flex flex-col gap-2.5 h-[83.25%] overflow-y-auto">
        {loading && (
          <span className="loading absolute left-1/2 top-1/2 -translate-1/2 text-3xl font-medium uppercase">
            loading.....
          </span>
        )}
        {!loading && error && (
          <span className="error absolute left-1/2 top-1/2 -translate-1/2 text-2xl font-medium uppercase bg-red-500 p-2.5 text-white rounded-sm w-[320px] text-center">
            {error}
          </span>
        )}
        {!loading &&
          !error &&
          posts.map((post, index) => (
            <div
              key={post.id}
              className="post p-2.5 bg-white rounded-md flex max-sm:flex-col items-center justify-between gap-5"
            >
              <div className="post-info flex flex-1 w-full items-center justify-between gap-5">
                <div className="post-number mr-auto py-1 px-2.5 bg-red-300 text-white font-bold rounded-md w-10 text-center">
                  {index + 1 < 10 ? "0" + (index + 1) : index + 1}
                </div>
                <div className="post-title bg-gray-100 flex-1 w-full  rounded-sm font-bold text-[#333] overflow-hidden hover:bg-green-200 transition-colors duration-300">
                  <Link
                    to={`post/${post.id}/details`}
                    className="block py-1 px-2.5"
                  >
                    {post.title}
                  </Link>
                </div>
              </div>
              <div className="post-controllers flex items-center gap-1.5 ml-auto max-sm:w-full">
                <Link to={`post/${post.id}/edit`} className="flex-1">
                  <Button className="w-full" disabled={!isLoggedIn}>
                    Edit
                  </Button>
                </Link>
                <Button
                  className="flex-1"
                  variant="danger"
                  disabled={!isLoggedIn}
                  onClick={() => handleDelete(post.id!, post.title)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Home;
