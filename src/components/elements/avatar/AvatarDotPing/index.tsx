import CardContainer from "@/components/ui/CardContainer";

const AvatarDotPing = () => {
  const codeString = `<div className="flex row-auto gap-4 items-end">
  <div className="relative">
    <div className="bg-[#3b82f6] absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-80"></span>
    </div>
    <p className="rounded-full bg-[#f3f4f6] px-4 py-3">JD</p>
  </div>
  <div className="relative">
    <div className="bg-[#9333ea] absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9333ea] opacity-80"></span>
    </div>
    <p className="rounded-full bg-[#f3f4f6] px-4 py-3">JD</p>
  </div>
  <div className="relative">
    <div className="bg-[#06b6d4] absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06b6d4] opacity-80"></span>
    </div>
    <p className="rounded-full bg-[#f3f4f6] px-4 py-3">JD</p>
  </div>
  <div className="relative">
    <div className="bg-[#10b981] absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-80"></span>
    </div>
    <p className="rounded-full bg-[#f3f4f6] px-4 py-3">JD</p>
  </div>
  <div className="relative">
    <div className="bg-[#f59e0b] absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f59e0b] opacity-80"></span>
    </div>
    <p className="rounded-full bg-[#f3f4f6] px-4 py-3">JD</p>
  </div>
  <div className="relative">
    <div className="bg-[#ef4444] absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ef4444] opacity-80"></span>
    </div>
    <p className="rounded-full bg-[#f3f4f6] px-4 py-3">JD</p>
  </div>
</div>
`;
  return (
    <CardContainer
      title={"Avatar Dot Ping"}
      description={
        "Avatar dots can have the ping animation. This can be used to indicate an important message. Check out code for detail of usage."
      }
      jsxCodeString={codeString}
    />
  );
};
export default AvatarDotPing;
