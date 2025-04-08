import CardContainer from "@/components/ui/CardContainer";

const GradientButtons = () => {
  const codeString = `  <div className="flex flex-wrap gap-3">
        <button className="py-1.5 px-5 rounded-md font-medium text-white bg-gradient-to-r from-[#c026d3] to-[#db2777]">
          Gradient
        </button>
        <button className="py-1.5 px-5 rounded-md font-medium text-white bg-gradient-to-r from-[#a855f7] to-[#4f46e5]">
          Gradient
        </button>
        <button className="py-1.5 px-5 rounded-md font-medium text-white bg-gradient-to-r from-[#38bdf8] to-[#2563eb]">
          Gradient
        </button>
        <button className="py-1.5 px-5 rounded-md font-medium text-white bg-gradient-to-r from-[#fbbf24] to-[#ea580c]">
          Gradient
        </button>
        <button className="py-1.5 px-5 rounded-md font-medium text-white bg-gradient-to-r from-[#f9a8d4] to-[#818cf8]">
          Gradient
        </button>
        <button className="py-1.5 px-5 rounded-md font-medium text-white bg-gradient-to-r from-[#4ade80] to-[#2563eb]">
          Gradient
        </button>
      </div>
`;
  return (
    <>
      <CardContainer
        title={"Gradient Buttons"}
        description={
          "Buttons can be gradient. Check out code for detail of usage."
        }
        jsxCodeString={codeString}
      />
    
    </>
  );
};
export default GradientButtons;
