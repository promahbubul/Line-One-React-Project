import { Outlet } from "react-router-dom";

const MainArea = () => {
  return (
    <div className="bg-[#f8fafc]  pt-28 px-10 h-[2000px]">
      <Outlet />
    </div>
  );
};
export default MainArea;
