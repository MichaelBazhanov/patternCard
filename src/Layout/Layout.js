import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  useEffect(() => {
    let menu = document.querySelector("#toggle-menu");
    let navigation = document.querySelector("#navigation");
    let main = document.querySelector("#main");
    menu.addEventListener("click", (e) => {
      menu.classList.toggle("active");
      navigation.classList.toggle("active");
      main.classList.toggle("active");
    });

    // Программный hover
    let list = document.querySelectorAll("#navigation li .navigation-item");
    list.forEach((item) => item.addEventListener("mouseover", activeLink));
    function activeLink() {
      list.forEach((item) => item.classList.remove("hovered"));
      this.classList.add("hovered");
    }
  });
  return (
    <>
      <h1 className="sr-only">User Dashboard - Card System</h1>
      <main className="overflow-x-hidden">
        <div className="relative w-full">
          {/* <!-- navigation --> */}
          <div
            id="navigation"
            className="left-[-300px] fixed z-[1000] sm:w-15 lg:w-[300px] lg:left-0 h-full bg-fuchsia-400 overflow-hidden transition-[width,left] ease-in-out"
          >
            <ul className="absolute left-0 top-0 w-full text-white">
              <li className="mb-5">
                <a
                  title="Card System"
                  href="#"
                  className="flex items-center relative w-full cursor-default"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 fill-current my-4.5 mx-4.5 flex-shrink-0"
                    role="img"
                  >
                    <path d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                  </svg>

                  <h2 className="text-3xl font-bold whitespace-nowrap">
                    Card System
                  </h2>
                </a>
              </li>

              <li>
                <Link
                  title="Default example"
                  to="/"
                  className="navigation-item hovered"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="flex-shrink-0 h-6 w-6 fill-current my-4.5 mx-4.5"
                    role="img"
                  >
                    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
                  </svg>
                  <span className="whitespace-nowrap">Default example</span>
                </Link>
              </li>

              <li>
                <Link
                  title="Internet sales hits"
                  to="/internet-sales-hits"
                  className="navigation-item hovered"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="flex-shrink-0 h-6 w-6 fill-current my-4.5 mx-4.5"
                    role="img"
                  >
                    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
                  </svg>
                  <span className="whitespace-nowrap">Internet sales hits</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/recommended-today"
                  className="navigation-item"
                  title="Recommended today"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="flex-shrink-0 h-6 w-6 fill-current my-4.5 mx-4.5"
                    role="img"
                  >
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                  </svg>
                  <span className="whitespace-nowrap">Recommended today</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/popular-categories"
                  className="navigation-item"
                  title="Popular categories"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="flex-shrink-0 h-6 w-6 fill-current my-4.5 mx-4.5"
                    role="img"
                  >
                    <path d="M21.47,4.35L20.13,3.79V12.82L22.56,6.96C22.97,5.94 22.5,4.77 21.47,4.35M1.97,8.05L6.93,20C7.24,20.77 7.97,21.24 8.74,21.26C9,21.26 9.27,21.21 9.53,21.1L16.9,18.05C17.65,17.74 18.11,17 18.13,16.26C18.14,16 18.09,15.71 18,15.45L13,3.5C12.71,2.73 11.97,2.26 11.19,2.25C10.93,2.25 10.67,2.31 10.42,2.4L3.06,5.45C2.04,5.87 1.55,7.04 1.97,8.05M18.12,4.25A2,2 0 0,0 16.12,2.25H14.67L18.12,10.59" />
                  </svg>

                  <span className="whitespace-nowrap">Popular categories</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- main --> */}
        <div
          id="main"
          className="w-full left-0 absolute lg:w-[calc(100%-300px)] lg:left-[300px] min-h-screen bg-white transition-[width,left] ease-in-out"
        >
          {/* <!-- topbar --> */}
          <div className="w-full bg-white h-15 p-2.5 flex justify-between items-center shadow-sm">
            {/* <!-- toggle --> */}
            <div
              id="toggle-menu"
              className="z-[2000] cursor-pointer relative w-15 h-15 flex justify-center items-center flex-shrink-0 text-fuchsia-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-6 w-6 fill-current"
                role="img"
                id="svg"
              >
                <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
              </svg>
            </div>
          </div>

          <Outlet />
        </div>
        {/* <!-- main end--> */}
      </main>
    </>
  );
};

export default Layout;
