import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto bg-gray-900 text-white flex-row flex gap-1 text-lg font-semibold">
      <NavLink className={"py-3 px-5"} to={"/"}>
        Home
      </NavLink>
      <NavLink className={"py-3 px-5"} to={"/contact"}>
        Contact
      </NavLink>
      <NavLink className={"py-3 px-5"} to={"/about"}>
        About
      </NavLink>
    </nav>
  );
};
export default Navbar;
