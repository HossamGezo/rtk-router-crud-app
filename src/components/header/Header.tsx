// - - - - - - - - - - Components
// *** Button
import {NavLink} from "react-router";
import Button from "../button/Button";

// - - - - - - - - - - Header (Main Component)
const Header = () => {
  // *** Return JSX
  return (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#333] mb-2.5 select-none font-medium">
        CRUD APP
      </h1>
      <header className="header bg-[#333] flex items-center justify-between px-3 py-2.5 rounded-b-none sm:rounded-b-md mb-10">
        <nav className="navbar">
          <ul className="navbar-list flex items-center justify-center gap-5">
            <li className="navbar-list-item cursor-pointer select-none">
              <NavLink
                to="/"
                className={({isActive}) =>
                  isActive
                    ? "text-green-300"
                    : "text-white hover:text-green-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="navbar-list-item hover:text-green-300 cursor-pointer select-none">
              <NavLink
                to="post/add"
                className={({isActive}) =>
                  isActive
                    ? "text-green-300"
                    : "text-white hover:text-green-300"
                }
              >
                Add Post
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="registeration">
          <Button variant="outline">Login</Button>
        </div>
      </header>
    </>
  );
};

export default Header;
