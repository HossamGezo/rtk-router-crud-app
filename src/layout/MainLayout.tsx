// - - - - - - - - - - Libraries
// *** React Router
import {Outlet} from "react-router";

// - - - - - - - - - - Components
// *** Header
import Header from "../components/header/Header";

// - - - - - - - - - - MainLayout (Main Component)
const MainLayout = () => {
  return (
    <div className="custom-container">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
