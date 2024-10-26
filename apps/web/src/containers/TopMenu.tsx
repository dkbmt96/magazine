import React from "react";
import { routers } from "../routes";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "@components/Dropdown";
import SearchBox from "@components/SearchBox";

const TopMenu: React.FC = () => {
  let { pathname } = useLocation();
  return (
    <div className="flex bg-white px-8 items-center z-11">
      <div className="flex w-2/3">
        {routers.routes.map((item) => {
          const cleanPath = item.path?.split(':')[0];
          if (item.children?.length) {
            const opts = item.children.map((child) => child.id);
            return <Dropdown key={item.id} label={item.id} options={opts} />;
          }
          return (
            <Link
              key={item.id}
              to={cleanPath}
              className={`p-4 w-fit ${
                pathname === cleanPath ? "bg-red-500" : ""
              } hover:bg-gray-200`}
            >
              {item.id}
            </Link>
          );
        })}
      </div>
      <div className="flex-1"><SearchBox /></div>
    </div>
  );
};

export default TopMenu;
