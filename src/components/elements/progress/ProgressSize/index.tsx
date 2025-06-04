import CardContainer from "@/components/ui/CardContainer";

const ProgressSize = () => {
  const codeToString = `<div className="max-w-xl space-y-4">
  <div className="h-1 w-full bg-[#e9eef5] rounded-full">
    <div className="w-6/12 h-full bg-[#4f46e5] rounded-full"></div>
  </div>
  <div className="h-2 w-full bg-[#e9eef5] rounded-full">
    <div className="w-6/12 h-full bg-[#4f46e5] rounded-full"></div>
  </div>
  <div className="h-3 w-full bg-[#e9eef5] rounded-full">
    <div className="w-6/12 h-full bg-[#4f46e5] rounded-full"></div>
  </div>
  <div className="h-4 w-full bg-[#e9eef5] rounded-full">
    <div className="w-6/12 h-full bg-[#4f46e5] rounded-full"></div>
  </div>
</div>`;
  return (
    <>
      <CardContainer
        title={"Progress Size"}
        description={
          "The Progress components can have various sizes. Check out code for detail of usage."
        }
        jsxCodeString={codeToString}
      />
    </>
  );
};
export default ProgressSize;
