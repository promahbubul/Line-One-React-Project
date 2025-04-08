import CardContainer from "@/components/ui/CardContainer";

const SoftButtonGroup = () => {
  const codeString = `<div className="flex flex-col gap-5">
  <div className="flex">
    <button className="py-1.5 px-5 bg-[#d1fae5] rounded-l-md font-medium text-[#16a34a] hover:text-white hover:bg-[#4ade80] focus:bg-[#4ade80] active:bg-[#2c7a2b]">1</button>
    <button className="py-1.5 px-5 bg-[#d1fae5] font-medium text-[#16a34a] hover:text-white hover:bg-[#4ade80] focus:bg-[#4ade80] active:bg-[#2c7a2b]">2</button>
    <button className="py-1.5 px-5 bg-[#22c55e] font-medium text-white hover:text-white hover:bg-[#16a34a] focus:bg-[#16a34a] active:bg-[#2c7a2b]">3</button>
    <button className="py-1.5 px-5 bg-[#d1fae5] font-medium text-[#16a34a] hover:text-white hover:bg-[#4ade80] focus:bg-[#4ade80] active:bg-[#2c7a2b]">4</button>
    <button className="py-1.5 px-5 bg-[#d1fae5] rounded-r-md font-medium text-[#16a34a] hover:text-white hover:bg-[#4ade80] focus:bg-[#4ade80] active:bg-[#2c7a2b]">5</button>
  </div>
  <div className="flex">
    <button className="py-1.5 px-5 bg-[#fecaca] rounded-l-full font-medium text-[#f87171] hover:text-white hover:bg-[#f87171] focus:bg-[#f87171] active:bg-[#b91c1c]">First</button>
    <button className="py-1.5 px-5 bg-[#f87171] font-medium text-white hover:text-white hover:bg-[#ef4444] focus:bg-[#ef4444] active:bg-[#b91c1c]">Second</button>
    <button className="py-1.5 px-5 bg-[#fecaca] rounded-r-full font-medium text-[#f87171] hover:text-white hover:bg-[#f87171] focus:bg-[#f87171] active:bg-[#b91c1c]">Third</button>
  </div>
</div>
`;
  return (
    <CardContainer
      title={"Soft Button Group"}
      description={
        "Buttons groups can have a soft colors. To do this, you should use some opacity. Check out code for detail of usage."
      }
      jsxCodeString={codeString}
    />
  );
};
export default SoftButtonGroup;
