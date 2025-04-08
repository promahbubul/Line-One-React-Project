import CardContainer from "@/components/ui/CardContainer";

const AvatarDotPosition = () => {
  const codeString = `<div className="flex row-auto gap-4 items-end">
  {/* Top Right */}
  <div className="relative">
    <div className="bg-[#3b82f6] absolute border-2 border-white right-0 h-[14px] w-[14px] rounded-full">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-80"></span>
    </div>
    <p className="rounded-full bg-[#f3f4f6] px-4 py-3">JD</p>
  </div>
  {/* Top Left */}
  <div className="relative">
    <div className="bg-[#3b82f6] absolute border-2 border-white left-0 top-0 h-[14px] w-[14px] rounded-full">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-80"></span>
    </div>
    <p className="rounded-full bg-[#f3f4f6] px-4 py-3">JD</p>
  </div>
  {/* Bottom Right */}
  <div className="relative">
    <div className="bg-[#3b82f6] absolute border-2 border-white right-0 bottom-0 h-[14px] w-[14px] rounded-full">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-80"></span>
    </div>
    <p className="rounded-full bg-[#f3f4f6] px-4 py-3">JD</p>
  </div>
  {/* Bottom Left */}
  <div className="relative">
    <div className="bg-[#3b82f6] absolute border-2 border-white left-0 bottom-0 h-[14px] w-[14px] rounded-full">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-80"></span>
    </div>
    <p className="rounded-full bg-[#f3f4f6] px-4 py-3">JD</p>
  </div>
</div>
`;
  return (
    <CardContainer
      title={"Avarat Dot Position"}
      description={"Avatar dot position can be up, down, left and right. Check out code for detail of usage."}
      jsxCodeString={codeString}
    />
  );
};
export default AvatarDotPosition;
