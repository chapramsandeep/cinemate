import React, { useEffect, useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import Logo from '../assets/logo192.png';


export const Header = () => {
  const [hidden, setHidden] = useState(true);
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode])

  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const activeClass = "text-base block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
  const inActiveClass = "text-base block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  }
  return (
    <header>

      <nav className="bg-white border-b-2 border-gray-200 dark:bg-gray-900 dark:bg-gray-900 dark:border-b-1 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="Cinemate Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cinemate</span>
          </Link>

          <div id='mobile-nav' className="flex md:order-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full ml-2 md:ml-4 mr-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              title="Toggle Dark Mode"
            >
              {darkMode ? (
                // 🌞 Sun Icon (gray styled)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-blue-800 dark:text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3
           m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414
           m0-13.828l1.414 1.414M17.95 17.95l1.414 1.414
           M12 8a4 4 0 100 8 4 4 0 000-8z"
                  />
                </svg>
              ) : (
                // 🌙 Moon Icon (gray styled)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-800 dark:text-gray-100"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 0012 17a7 7 0 009-4.21z" />
                </svg>
              )}
            </button>


            <button onClick={() => setHidden(!hidden)} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <form onSubmit={handleSubmit}>
                <input type="text" id="search-navbar" name="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete='off' />
              </form>
            </div>
            <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          <div className={`${hidden ? "hidden" : ""} justify-between items-center w-full md:flex md:w-auto md:order-1`} id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <form onSubmit={handleSubmit}>
                <input type="text" id="search-navbar" name="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete='off' />
              </form>
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inActiveClass} end>Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies/popular" className={({ isActive }) => isActive ? activeClass : inActiveClass} >Popular</NavLink>
              </li>
              <li>
                <NavLink to="/movies/top" className={({ isActive }) => isActive ? activeClass : inActiveClass} >Top-Rated</NavLink>
              </li>
              <li>
                <NavLink to="/movies/upcoming" className={({ isActive }) => isActive ? activeClass : inActiveClass} >Upcoming</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </header>
  )
}


