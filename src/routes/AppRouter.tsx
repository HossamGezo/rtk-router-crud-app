// - - - - - - - - - - Libraries
import React, {Suspense} from "react";
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";

// - - - - - - - - - - Layouts & Static Pages
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import RequireAuth from "./RequireAuth";
import Error from "../pages/error/Error";

// - - - - - - - - - - Lazy Loading Pages
const AddPost = React.lazy(() => import("../pages/add-post/AddPost"));
const EditPost = React.lazy(() => import("../pages/edit-post/EditPost"));
const PostDetails = React.lazy(
  () => import("../pages/post-details/PostDetails")
);

// - - - - - - - - - - Loading Component
const Loading = () => <div className="p-10 text-center">Loading Page...</div>;

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
        path: "post/:id/details",
        element: (
          <Suspense fallback={<Loading />}>
            <PostDetails />
          </Suspense>
        ),
      },
      {
        Component: RequireAuth,
        children: [
          {
            path: "post/add",
            element: (
              <Suspense fallback={<Loading />}>
                <AddPost />
              </Suspense>
            ),
          },
          {
            path: "post/:id/edit",
            element: (
              <Suspense fallback={<Loading />}>
                <EditPost />
              </Suspense>
            ),
          },
        ],
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
