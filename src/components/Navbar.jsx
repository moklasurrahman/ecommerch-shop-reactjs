import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import DropdownLogin from "./Elements/DropdownLogin";
import DropdownLogout from "./Elements/DropdownLogout";
import { useState } from "react";

const Navbar = () => {
  const { cartList } = useCart();
  const [dropdown, setDropdown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token")); // comming from login
  const [mobile, setMobile] = useState(true);

  return (
    <section>
      <nav className=" bg-gray-100 border-gray-50 dark:bg-gray-900 font-sans">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <span className="self-center font-bold text-2xl text-gray-900 whitespace-nowrap dark:text-white">
              MYeCOM..
            </span>
          </Link>

          <div className="flex items-center md:order-2">
            <div
              type="button"
              className=" text-gray-900 flex items-center gap-10 mr-3 font-bold rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>

              <Link to="/cart">
                <div className="cursor-pointer relative inline-flex items-center text-sm font-medium text-center">
                  <i className="bi bi-cart-fill text-[20px] text-gray-900"></i>
                  <span className="absolute inline-flex items-center justify-center w-3 h-3 text-[9px] p-2 text-white bg-red-500 border-2 border-gray-900 rounded-full -top-2 -right-2 dark:border-gray-900">
                    {cartList.length}
                  </span>
                </div>
              </Link>

              <div
                className=" cursor-pointer hover "
                onClick={() => setDropdown(!dropdown)}
              >
                <i className="bi bi-person-circle text-[20px]"></i>
              </div>
            </div>

            {/* <span onClick={()=>setDropdown(!dropdown)} className='cursor-pointer'><AccountCircleOutlinedIcon className='icon'/></span> */}

            <div className="z-50 dropdow absolute top-[50px] right-5 xl:right-[50px]">
              {dropdown &&
                (token ? (
                  <DropdownLogin setDropdown={setDropdown} />
                ) : (
                  <DropdownLogout setDropdown={setDropdown} />
                ))}
            </div>

            <button
              onClick={() => setMobile(!mobile)}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {mobile && (<div
              className="items-center justify-between sm:hidden w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-2"
            >
              <ul className=" text-blue-950 font-bold text-md flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Products"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    All Products
                  </Link>
                </li>

                <li>
                  <Link
                    to="https://www.repliq.dev/about"
                    target="blank"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
