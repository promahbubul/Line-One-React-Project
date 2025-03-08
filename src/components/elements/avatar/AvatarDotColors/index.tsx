import CardContainer from "@/components/ui/CardContainer";

const AvatarDotColors = () => {
  const codeString = `<div className="flex flex-row gap-4 items-baseline">
  <div className="relative">
    <div className="bg-[#94a3b8] absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full"></div>
    <img src="https://i.ibb.co.com/ks6wCf73/avatar-1.jpg" alt="" className="rounded-full w-14 h-14" />
  </div>
  <div className="relative">
    <div className="bg-[#3b82f6] absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full"></div>
    <img src="https://i.ibb.co.com/qYh3q4KJ/avatar-7.jpg" alt="" className="rounded-full w-14 h-14" />
  </div>
  <div className="relative">
    <div className="bg-[#9333ea] absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full"></div>
    <img src="https://i.ibb.co.com/kVzWMDp8/avatar-6.jpg" alt="" className="rounded-full w-14 h-14" />
  </div>
  <div className="relative">
    <div className="bg-[#06b6d4] absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full"></div>
    <img src="https://i.ibb.co.com/9Hmtg3Q1/avatar-5.jpg" alt="" className="rounded-full w-14 h-14" />
  </div>
  <div className="relative">
    <div className="bg-[#10b981] absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full"></div>
    <img src="https://i.ibb.co.com/mgjtdRn/avatar-4.jpg" alt="" className="rounded-full w-14 h-14" />
  </div>
  <div className="relative">
    <div className="bg-[#f59e0b] absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full"></div>
    <img src="https://i.ibb.co.com/yFryjXfB/avatar-3.jpg" alt="" className="rounded-full w-14 h-14" />
  </div>
  <div className="relative">
    <div className="bg-[#ef4444] absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full"></div>
    <img src="https://i.ibb.co.com/ks6wCf73/avatar-1.jpg" alt="" className="rounded-full w-14 h-14" />
  </div>
</div>
`;
  return (
    <CardContainer
      title={"Avatar Dot Color"}
      description={
        "Avatar dots can be used in various colors. It can be used to indicate the user status. Check out code for detail of usage."
      }
      jsxCodeString={codeString}
    />
  );
};
export default AvatarDotColors;
