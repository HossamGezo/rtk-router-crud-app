// - - - - - - - - - - Libraries
import {Link} from "react-router";

// - - - - - - - - - - Components
// *** Button
import Button from "../../components/button/Button";

// - - - - - - - - - - Home (Main Component)
const Home = () => {
  return (
    <div className="posts-list bg-gray-200 sm:rounded-md h-[70vh]">
      <h1 className="posts-list-head text-center text-2xl md:text-3xl lg:text-4xl text-[#333] font-medium select-none py-5">
        POSTS
      </h1>
      <div className="posts p-5 flex flex-col gap-2.5 h-[83.25%] overflow-y-auto">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div className="post p-2.5 bg-white rounded-md flex max-sm:flex-col items-center justify-between gap-5">
              <div className="post-info flex flex-1 w-full items-center justify-between gap-5">
                <div className="post-number mr-auto py-1 px-2.5 bg-red-300 text-white font-bold rounded-md w-10 text-center">
                  {index + 1 < 10 ? "0" + (index + 1) : index + 1}
                </div>
                <div className="post-title bg-gray-100 flex-1 w-full py-1 px-2.5 rounded-sm font-bold text-[#333]">
                  Post Title
                </div>
              </div>
              <div className="post-controllers flex items-center gap-1.5 ml-auto max-sm:w-full">
                <Button className="flex-1">
                  <Link to={`${index + 1}/edit`}>Edit</Link>
                </Button>
                <Button className="flex-1" variant="danger">
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
