import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Svg from "../components/svg";
import general_svg from "../assets/images/general.svg";
import card_svg from "../assets/images/card.svg";

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
                <Link
                  title="Card System"
                  to="/"
                  className="flex items-center relative w-full cursor-default"
                >
                  <Svg
                    src={general_svg}
                    className="h-6 w-6 fill-current my-4.5 mx-4.5 flex-shrink-0"
                    width="24"
                    height="24"
                    stroke="currentColor"
                  />

                  <h2 className="text-3xl font-bold whitespace-nowrap">
                    Card System
                  </h2>
                </Link>
              </li>

              <li>
                <Link
                  title="Default example"
                  to="/"
                  className="navigation-item hovered"
                >
                  <Svg
                    src={card_svg}
                    className="flex-shrink-0 h-6 w-6 fill-current my-4.5 mx-4.5"
                    width="24"
                    height="24"
                  />
                  <span className="whitespace-nowrap">Default example</span>
                </Link>
              </li>

              <li>
                <Link
                  title="Internet sales hits"
                  to="/internet-sales-hits"
                  className="navigation-item hovered"
                >
                  <Svg
                    src={card_svg}
                    className="flex-shrink-0 h-6 w-6 fill-current my-4.5 mx-4.5"
                    width="24"
                    height="24"
                  />
                  <span className="whitespace-nowrap">Internet sales hits</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/recommended-today"
                  className="navigation-item"
                  title="Recommended today"
                >
                  <Svg
                    src={card_svg}
                    className="flex-shrink-0 h-6 w-6 fill-current my-4.5 mx-4.5"
                    width="24"
                    height="24"
                  />

                  <span className="whitespace-nowrap">Recommended today</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/popular-categories"
                  className="navigation-item"
                  title="Popular categories"
                >
                  <Svg
                    src={card_svg}
                    className="flex-shrink-0 h-6 w-6 fill-current my-4.5 mx-4.5"
                    width="24"
                    height="24"
                  />

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
