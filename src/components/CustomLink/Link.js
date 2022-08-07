import React from "react";
import { Link, useMatch } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LinkCustom = ({ children, to, active, title, ...props }) => {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

  return (

    <Link
      to={to}
      title={title}
      className={classNames(
        `navigation-item`,
        active
          ? `
						before:shadow-transparent after:shadow-transparent sm:before:shadow-white sm:after:shadow-white
						hover:before:shadow-transparent hover:after:shadow-transparent sm:hover:before:shadow-white sm:hover:after:shadow-white
						rounded-tr-full rounded-br-full`
          : ``,
        match
          ? `
						bg-white text-fuchsia-400 before:shadow-rounded-top after:shadow-rounded-bottom`
          : ``
      )}
    >
      {children}
    </Link>
  );
};

export default LinkCustom;