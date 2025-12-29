// - - - - - - - - - - Libraries
import clsx from "clsx";

// - - - - - - - - - - Components
import {NavLink} from "react-router";
import Button from "../button/Button";

// - - - - - - - - - - Redux Files
import {useAppSelector} from "../../app/hooks";
import {useDispatch} from "react-redux";
import {toggleLogin} from "../../features/auth/authSlice";

// - - - - - - - - - - Header (Main Component)
const Header = () => {
  // *** Redux Custom Hooks
  const {isLoggedIn} = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  // *** Login Logic
  const handleLogin = () => {
    dispatch(toggleLogin());
  };
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
          <Button
            variant="outline"
            onClick={handleLogin}
            className={clsx(
              isLoggedIn && "border-green-500 bg-green-500 text-white"
            )}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
