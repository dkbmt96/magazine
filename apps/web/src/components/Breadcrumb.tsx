import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Breadcrumb: React.FC = () => {

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb" className="my-4">
      <ol className="flex p-0 list-none">
        <li>
          <Link to="/">
            <span className="text-red-700">Home</span>
          </Link>
        </li>
        {pathnames.map((pathname, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li className="before:content-['>'] before:mx-2" key={to}>
              <Link to={to}>
                <span
                  className={`${
                    index === pathnames.length - 1 ? "" : "text-red-700"
                  }`}
                >
                  {pathname.charAt(0).toUpperCase() + pathname.slice(1)}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
