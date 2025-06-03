import {
  MainArea,
  MoreMenu,
  SideMenu,
  TopNavigation,
} from "@/components/layout";
import { useState } from "react";

const Layout = () => {
  const [showMoreMenu, setShowMoreMenu] = useState(true); // changable => state

  return (
    <div className="flex flex-row  w-full bg-[#f8fafc]">
      <SideMenu />
      <div className="flex flex-row w-full  h-screen relative">
        {/* MoreMenu  */}
        <MoreMenu showMoreMenu={showMoreMenu} />
        <section
          className={`h-screen overflow-y-auto box-border  absolute right-0 ease-in-out duration-300 ${
            showMoreMenu ? "w-[calc(100%-240px)]" : "w-full"
          }`}
        >
          <TopNavigation
            showMoreMenu={showMoreMenu}
            setShowMoreMenu={setShowMoreMenu}
          />
          <MainArea />
        </section>
      </div>
    </div>
  );
};
export default Layout;
