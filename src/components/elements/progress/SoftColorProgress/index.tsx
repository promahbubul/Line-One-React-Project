import CardContainer from "@/components/ui/CardContainer";

const SoftColorProgress = () => {
  const codeToString = `<div className="max-w-xl space-y-4">
  <div className="h-2 w-full bg-[#62748e]/15 rounded-full">
    <div className="w-4/12 h-full bg-[#62748e] rounded-full"></div>
  </div>
  <div className="h-2 w-full bg-[#4f46e5]/15 rounded-full">
    <div className="w-5/12 h-full bg-[#4f46e5] rounded-full"></div>
  </div>
  <div className="h-2 w-full bg-[#f000b9]/15 rounded-full">
    <div className="w-6/12 h-full bg-[#f000b9] rounded-full"></div>
  </div>
  <div className="h-2 w-full bg-[#4bc8a0]/15 rounded-full">
    <div className="w-7/12 h-full bg-[#4bc8a0] rounded-full"></div>
  </div>
  <div className="h-2 w-full bg-[#ff9800]/15 rounded-full">
    <div className="w-8/12 h-full bg-[#ff9800] rounded-full"></div>
  </div>
  <div className="h-2 w-full bg-[#ff5724]/15 rounded-full">
    <div className="w-9/12 h-full bg-[#ff5724] rounded-full"></div>
  </div>
</div>`;
  return (
    <>
      <CardContainer
        title={"Soft Color Progress"}
        description={
          "Progress can have a soft colors. To do this, you should use some opacity. Check out code for detail of usage."
        }
        jsxCodeString={codeToString}
      />
    </>
  );
};
export default SoftColorProgress;
