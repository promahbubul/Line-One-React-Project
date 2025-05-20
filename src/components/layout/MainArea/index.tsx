import { Outlet } from "react-router-dom";

const MainArea = () => {
  return (
    <div className="bg-[#f8fafc]  pt-20 px-10 pb-10 h-screen overflow-y-auto">
      <Outlet />
    </div>
  );
};
export default MainArea;
