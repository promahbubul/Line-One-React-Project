import CardContainer from "@/components/ui/CardContainer";

const ButtonSize = () => {
  const codeString = `<div className="flex flex-wrap gap-3">
    <button className="h-6 px-3 bg-[#0070f3] rounded-md font-medium text-xs text-white hover:bg-[#0059c1] focus:bg-[#0059c1] active:bg-[#004ea8]">
      Button
    </button>
    <button className="h-8 px-4 bg-[#0070f3] rounded-md font-medium text-sm text-white hover:bg-[#0059c1] focus:bg-[#0059c1] active:bg-[#004ea8]">
      Button
    </button>
    <button className="h-10 px-5 bg-[#0070f3] rounded-md font-medium text-lg text-white hover:bg-[#0059c1] focus:bg-[#0059c1] active:bg-[#004ea8]">
      Button
    </button>
    <button className="h-12 px-6 bg-[#0070f3] rounded-md font-medium text-xl text-white hover:bg-[#0059c1] focus:bg-[#0059c1] active:bg-[#004ea8]">
      Button
    </button>
    <button className="h-14 px-7 bg-[#0070f3] rounded-md font-medium text-xl text-white hover:bg-[#0059c1] focus:bg-[#0059c1] active:bg-[#004ea8]">
      Button
    </button>
</div>
`;
  return (
    <CardContainer
      title={"Button Size"}
      description={
        "Button components can have various sizes. Check out code for detail of usage."
      }
      jsxCodeString={codeString}
    />
  );
};
export default ButtonSize;
