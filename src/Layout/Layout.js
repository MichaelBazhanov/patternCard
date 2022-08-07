import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Svg from "../components/svg";
import general_svg from "../assets/images/general.svg";
import card_svg from "../assets/images/card.svg";
import toggle_bar_svg from "../assets/images/toggle-bar.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Layout = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // let menu = document.querySelector("#toggle-menu");
    // let navigation = document.querySelector("#navigation");
    // let main = document.querySelector("#main");
    // menu.addEventListener("click", (e) => {
    //   menu.classList.toggle("active");
    //   navigation.classList.toggle("active");
    //   main.classList.toggle("active");
    // });
    // // Программный hover
    // let list = document.querySelectorAll("#navigation li .navigation-item");
    // list.forEach((item) => item.addEventListener("mouseover", activeLink));
    // function activeLink() {
    //   list.forEach((item) => item.classList.remove("hovered"));
    //   this.classList.add("hovered");
    // }
  });
  return (
    <>
      <h1 className="sr-only">User Dashboard - Card System</h1>
      <main className="overflow-x-hidden">
        <div className="relative w-full">
          {/* <!-- navigation --> */}
          <div
            id="navigation"
            className={classNames(
              `fixed z-[1000] left-[-300px] lg:left-0
              sm:w-15 lg:w-[300px] h-full
              bg-fuchsia-400 overflow-hidden transition-[width,left] ease-in-out`,
              // active ? `active` : ``
              active ? `left-0 w-full lg:w-15` : ``
            )}
          >
            <ul className="absolute left-0 top-0 w-full text-white">
              <li className="mb-5">
                <div className="flex items-center relative w-full cursor-default">
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
                </div>
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
          className={classNames(
            `absolute left-0 lg:left-[300px]
            w-full lg:w-[calc(100%-300px)] min-h-screen
            bg-white transition-[width,left] ease-in-out`,
            // active ? "active" : ""
            active ? `sm:left-15 sm:w-[calc(100%-60px)] lg:left-15 lg:w-[calc(100%-60px)]` : ``
          )}
        >
          {/* <!-- top bar --> */}
          <div className="w-full bg-white h-15 p-2.5 flex justify-between items-center shadow-sm">
            {/* <!-- toggle --> */}
            <div
              onClick={() => setActive(!active)}
              id="toggle-menu"
              className={classNames(
                `relative z-[2000]
                w-15 h-15
                flex justify-center items-center flex-shrink-0 text-fuchsia-400 cursor-pointer`,
                // active ? "active" : ""
                active ? `fixed sm:static left-[calc(100%-60px)] sm:left-auto
                !text-white sm:!text-inherit` : ``,
              )}
            >
              <Svg
                src={toggle_bar_svg}
                className="h-6 w-6 fill-current"
                title="Menu"
                width="448"
                height="512"
              />
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
