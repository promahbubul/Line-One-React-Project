import { NavLink } from "react-router-dom";

const LinkItems = ({ title, path }: { title: string; path: string }) => {
  return (
    <NavLink
      to={path}
      className="py-[6px] block text-[#606e81]  cursor-pointer text-base hover:text-[#7872eb]"
    >
      {title}
    </NavLink>
  );
};
export default LinkItems;
 