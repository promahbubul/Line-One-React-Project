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
    <div className="flex flex-row  w-full">
      <SideMenu />
      <div className="flex flex-row w-full  h-screen">
        {/* MoreMenu  */}
        <MoreMenu showMoreMenu={showMoreMenu} />
        <section
          className={`h-screen overflow-y-auto ${
            showMoreMenu ? "w-[calc(100%-240px)]" : "w-full"
          } `}
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
