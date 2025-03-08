import { NavLink } from "react-router-dom";
import { sideMenuData } from "@/constant/sideMenu.constant";
import { Tooltip } from "react-tooltip";

const SideMenu = () => {
  return (
    <div className="border-r-[#e9eef5] border-r bg-white  w-[79px]">
      <div className="">
        <img src="https://lineone.piniastudio.com/images/app-logo.svg" alt="" />
      </div>
      <div className="flex flex-col items-center gap-4">
        {sideMenuData.map((menu) => (
          <div className="bg-[#edecfc] h-max p-[6px] rounded-md">
            <NavLink
              id={menu.tooltip}
              className={""}
              to={menu.path}
              key={menu.id}
            >
              <div className="">
                <img src={menu.icon} alt="" className="size-10" />
              </div>
            </NavLink>
            <Tooltip
              style={{
                backgroundColor: "silver",
                color: "black",
                fontWeight: "bold",
                padding: "5px 7px",
              }}
              anchorSelect={`#${menu.tooltip}`}
              content={menu.title}
              place="right"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default SideMenu;
