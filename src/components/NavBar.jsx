import { useState } from "react";
import { NavLink } from "react-router-dom";

import { navbarLinks } from "../constants";
import { cn } from "../utils";

function NavBar() {
  let [open, setOpen] = useState(false);

  let closeMenu = () => setOpen(false);

  return (
    <nav
      id="navigation"
      className="fixed flex items-center justify-between h-16 w-screen p-4 z-10 md:pr-8"
    >
      <div className="flex gap-5 items-center">
        {navbarLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.route}
            onClick={() => closeMenu()}
            className={({ isActive }) =>
              cn(
                "text-white font-bold text-lg hover-underline-animation",
                isActive ? "after:w-full" : ""
              )
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>

      <div
        id="navigation-burger"
        onClick={() => setOpen(!open)}
        className="cursor-pointer w-8 h-5 md:hidden z-10"
      >
        <div
          className={
            "burger-item w-8 h-1 mb-1 rounded-sm bg-black ease-in-out duration-150 " +
            (open ? "relative rotate-45 top-2" : "")
          }
        />
        <div
          className={
            "burger-item w-8 h-1 mb-1 rounded-sm bg-black ease-in-out duration-150 " +
            (open ? "relative rotate-45" : "")
          }
        />
        <div
          className={
            "burger-item w-8 h-1 rounded-sm bg-black ease-in-out duration-150 " +
            (open ? "relative -rotate-45 bottom-2" : "")
          }
        />
      </div>
    </nav>
  );
}

export default NavBar;
