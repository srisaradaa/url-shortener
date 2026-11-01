import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStoreContext } from '../contextApi/ContextApi';
import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const NavBar = () => {

  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const path = useLocation().pathname;
  const [navBarOpen, setNavBarOpen] = useState(false);

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem('JWT_TOKEN');
    navigate('/login');
  };

  return (
    <div className="bg-custom-gradient h-16 flex items-center sticky top-0 z-50">
      <div className="w-full flex justify-between px-4 sm:px-8 lg:px-14 items-center">
        <Link to='/'>
          <h1 className="text-white text-3xl font-bold">
            TinyLink
          </h1>
        </Link>
        <ul className={`flex flex-col sm:flex-row gap-4 sm:gap-10 sm:items-center absolute sm:static left-0 top-[62px] ${navBarOpen ? "h-fit py-3" : "h-0 overflow-hidden"} bg-custom-gradient sm:bg-none shadow-md sm:shadow-none sm:h-fit w-full sm:w-fit px-4 sm:px-0 sm:py-0 transition-all duration-150`}>
          <li>
            <Link 
              to='/' 
              className={`${
                path === '/' ? "text-white font-semibold" : "text-gray-200"
              } px-2`}>
                Home
            </Link>
          </li>
          <li>
            <Link 
              to='/about'
              className={`${
                path === '/about' ? "text-white font-semibold" : "text-gray-200"
              } px-2`}>
                About
            </Link>
          </li>
          {token && (
            <li>
              <Link to='/dashboard' className="px-2">
                Dashboard
              </Link>
            </li>
          )}

          {!token && (
            <li>
              <Link 
                to='/register'
                className="bg-green-600 text-white px-4 py-2 rounded-md"
              >
                  Sign Up
              </Link>
            </li>
          )}

          {token && (
            <li>
              <button
                onClick={onLogOutHandler} 
                className="bg-red-700 text-white px-4 py-1 rounded-md">
                  Log Out
              </button>
            </li>
          )}
        </ul>
        <button
          onClick={() => setNavBarOpen(!navBarOpen)}
          className="sm:hidden flex items-center"
        >
            {navBarOpen ? (
              <RxCross2 className="text-white" />
            ) : (
              <RxHamburgerMenu className="text-white" />
            )}
        </button>
      </div>
    </div>
  )
}

export default NavBar;