import CardContainer from "@/components/ui/CardContainer";

const ButtonGroupComponent = () => {
  const codeString = `<div className="flex flex-col gap-5">
  <div className="flex">
    <button className="py-1.5 px-5 bg-[#0070f3] rounded-l-md font-medium text-white hover:bg-[#005bb5] focus:bg-[#005bb5] active:bg-[#003f8e]">1</button>
    <button className="py-1.5 px-5 bg-[#0070f3] font-medium text-white hover:bg-[#005bb5] focus:bg-[#005bb5] active:bg-[#003f8e]">2</button>
    <button className="py-1.5 px-5 bg-[#005bb5] font-medium text-white hover:bg-[#005bb5] focus:bg-[#005bb5] active:bg-[#003f8e]">3</button>
    <button className="py-1.5 px-5 bg-[#0070f3] font-medium text-white hover:bg-[#005bb5] focus:bg-[#005bb5] active:bg-[#003f8e]">4</button>
    <button className="py-1.5 px-5 bg-[#0070f3] rounded-r-md font-medium text-white hover:bg-[#005bb5] focus:bg-[#005bb5] active:bg-[#003f8e]">5</button>
  </div>
  <div className="flex">
    <button className="py-1.5 px-5 bg-[#6B7280] rounded-l-full font-medium text-white hover:bg-[#4B5563] focus:bg-[#4B5563] active:bg-[#1F2937]">First</button>
    <button className="py-1.5 px-5 bg-[#4B5563] font-medium text-white hover:bg-[#6B7280] focus:bg-[#6B7280] active:bg-[#1F2937]">Second</button>
    <button className="py-1.5 px-5 bg-[#6B7280] rounded-r-full font-medium text-white hover:bg-[#4B5563] focus:bg-[#4B5563] active:bg-[#1F2937]">Third</button>
  </div>
</div>`;
  return (
    <CardContainer
      title={"Button Group"}
      description={
        "Button groups are an easy way to group a series of buttons together. Check out code for detail of usage."
      }
      jsxCodeString={codeString}
    />
  );
};
export default ButtonGroupComponent;
