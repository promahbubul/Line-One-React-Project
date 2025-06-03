import {
  CiMenuFries,
  CiSearch,
  CiBellOn,
  GiPaintBucket,
  HiOutlineSquares2X2,
  LuSun,
  RiArrowLeftSLine,
} from "../../../assets/icons";

const TopNavigation = ({
  showMoreMenu,
  setShowMoreMenu,
}: {
  showMoreMenu: boolean;
  setShowMoreMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={`bg-[#f8fafc] relative ease-in-out duration-500 w-full  `}>
      <div
        className={`h-[60px]  absolute inset-x-0  bg-white/85 border-b flex flex-row items-center justify-between px-10 border-b-[#e9eef5] duration-500  `}
      >
        {/* Left */}
        <button onClick={() => setShowMoreMenu(!showMoreMenu)} className="">
          {showMoreMenu ? (
            <RiArrowLeftSLine className="size-6 font-bold text-[#6667eb]" />
          ) : (
            <CiMenuFries className="size-6 font-bold text-[#6667eb]" />
          )}

          {/* <CiMenuFries className="size-6 rotate-180 font-bold text-[#6667eb]" /> */}
        </button>
        {/* Right */}
        <div className="flex flex-row items-center justify-between gap-5">
          <div className="relative">
            <CiSearch className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="text"
              placeholder="Search here..."
              className="bg-[#e9eef5]  border-none  outline-none rounded-full text-lg py-1 px-8 "
            />
          </div>
          <div className="flex gap-3 flex-row items-center  text-2xl">
            <LuSun className="text-[#ffb900]" />
            <GiPaintBucket />
            <CiBellOn />
            <HiOutlineSquares2X2 />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopNavigation;
