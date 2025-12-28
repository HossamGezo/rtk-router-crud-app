// - - - - - - - - - - Libraries
// *** React Router & React Router Dom
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";

// - - - - - - - - - - Components
// *** MainLayout
import MainLayout from "../layout/MainLayout";
// *** Home
import Home from "../pages/home/Home";
// *** AddPost
import AddPost from "../pages/add-post/AddPost";
// *** EditPost
import EditPost from "../pages/edit-post/EditPost";
// *** Error
import Error from "../pages/error/Error";
// *** PostDetails
import PostDetails from "../pages/post-details/PostDetails";

// - - - - - - - - - - AppRouter (Main Component)
// *** Router
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {index: true, Component: Home},
      {path: "post", Component: Home},
      {
        path: "post/add",
        Component: AddPost,
      },
      {
        path: "post/:id/edit",
        Component: EditPost,
      },
      {
        path: "post/:id/details",
        Component: PostDetails,
      },
      {path: "*", Component: Error},
    ],
  },
]);
// *** AppRouter
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
