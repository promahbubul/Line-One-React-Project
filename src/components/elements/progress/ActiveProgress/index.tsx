import CardContainer from "@/components/ui/CardContainer";

const ActiveProgress = () => {
  const codeStrig = ` <div className="max-w-xl space-y-4">
    <div className="h-2 w-full bg-[#e9eef5] rounded-full ">
      <div className="w-4/12 relative h-full bg-[#62748e] overflow-hidden rounded-full">
        <div className="absolute w-full indent-0  top-0 left-[-0%] animate-scroll   h-full bg-white/30 rounded-full"></div>
      </div>
    </div>
    <div className="h-2 w-full bg-[#e9eef5] rounded-full">
      <div className="w-5/12 h-full relative bg-[#4f46e5] rounded-full">
        <div className="absolute w-full indent-0  top-0 left-[-0%] animate-scroll   h-full bg-white/30 rounded-full"></div>
      </div>
    </div>
    <div className="h-2 w-full bg-[#e9eef5] rounded-full">
      <div className="w-6/12 h-full relative bg-[#f000b9] rounded-full">
        <div className="absolute w-full indent-0  top-0 left-[-0%] animate-scroll   h-full bg-white/30 rounded-full"></div>
      </div>
    </div>
    <div className="h-2 w-full bg-[#e9eef5] rounded-full">
      <div className="w-7/12 h-full relative bg-[#4bc8a0] rounded-full">
        <div className="absolute w-full indent-0  top-0 left-[-0%] animate-scroll   h-full bg-white/30 rounded-full"></div>
      </div>
    </div>
    <div className="h-2 w-full bg-[#e9eef5] rounded-full">
      <div className="w-8/12 h-full relative bg-[#ff9800] rounded-full">
        <div className="absolute w-full indent-0  top-0 left-[-0%] animate-scroll   h-full bg-white/30 rounded-full"></div>
      </div>
    </div>
    <div className="h-2 w-full bg-[#e9eef5] rounded-full">
      <div className="w-9/12 h-full relative bg-[#ff5724] rounded-full">
        <div className="absolute w-full indent-0  top-0 left-[-0%] animate-scroll   h-full bg-white/30 rounded-full"></div>
      </div>
    </div>
</div>`;
  return (
    <CardContainer
      title={"Active Progress"}
      description={
        "An indicating progress bar visually indicates the current level of progress of a task. Check out code for detail of usage."
      }
      jsxCodeString={codeStrig}
    />
  );
};
export default ActiveProgress;
