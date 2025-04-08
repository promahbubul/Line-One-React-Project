import CardContainer from "@/components/ui/CardContainer"

const Outlined = () => {
    const codeString = `<div className="flex flex-col gap-5">
  <div className="flex">
    <button className="py-1.5 px-5 bg-white rounded-l-md font-medium text-[#0ea5e9] hover:text-white hover:bg-[#0284c7] focus:bg-[#0284c7] active:bg-[#0369a1] border-t border-b border-l border-[#0ea5e9] duration-300">1</button>
    <button className="py-1.5 px-5 bg-white font-medium text-[#0ea5e9] hover:text-white hover:bg-[#0284c7] focus:bg-[#0284c7] active:bg-[#0369a1] border border-[#0ea5e9] border-t border-b duration-300">2</button>
    <button className="py-1.5 px-5 bg-[#0ea5e9] font-medium text-white hover:text-white hover:bg-[#0284c7] focus:bg-[#0284c7] active:bg-[#0369a1] border-t border-b border-[#0ea5e9] duration-300">3</button>
    <button className="py-1.5 px-5 bg-white font-medium text-[#0ea5e9] hover:text-white hover:bg-[#0284c7] focus:bg-[#0284c7] active:bg-[#0369a1] border border-[#0ea5e9] border-t border-b duration-300">4</button>
    <button className="py-1.5 px-5 bg-white rounded-r-md font-medium text-[#0ea5e9] hover:text-white hover:bg-[#0284c7] focus:bg-[#0284c7] active:bg-[#0369a1] border-t border-b border-r border-[#0ea5e9] duration-300">5</button>
  </div>
  <div className="flex">
    <button className="py-1.5 px-5 rounded-l-full font-medium text-[#f59e0b] hover:text-white hover:bg-[#fbbf24] focus:bg-[#fbbf24] active:bg-[#d97706] border-t border-b border-l border-[#f59e0b] duration-300">First</button>
    <button className="py-1.5 px-5 font-medium text-white bg-[#fbbf24] hover:text-white hover:bg-[#fbbf24] focus:bg-[#fbbf24] active:bg-[#d97706] border-t border-b border-[#f59e0b] duration-300">Second</button>
    <button className="py-1.5 px-5 rounded-r-full font-medium text-[#f59e0b] hover:text-white hover:bg-[#fbbf24] focus:bg-[#fbbf24] active:bg-[#d97706] border-t border-b border-r border-[#f59e0b] duration-300">Third</button>
  </div>
</div>`;
  return (
    <CardContainer
      title={"Outlined"}
      description={
        "Buttons groups can be outlied. Check out code for detail of usage"
      }
      jsxCodeString={codeString}
    />
  );
}
export default Outlined