import CardContainer from "@/components/ui/CardContainer";

const OutlinedGradientButtons = () => {
  const codeString = `<div className="flex flex-wrap gap-3">
    <div className="border leading-none h-full rounded-lg bg-gradient-to-r from-[#fbbf24] to-[#ea580c] p-0.5">
      <button className="bg-white py-2 px-5 rounded-lg border">
        Outline
      </button>
    </div>

    <div className="border leading-none h-full rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#2563eb] p-0.5">
      <button className="bg-white py-2 px-5 rounded-lg border">
        Outline
      </button>
    </div>

    <div className="border leading-none h-full rounded-lg bg-gradient-to-l from-[#f9a8d4] to-[#818cf8] p-0.5">
      <button className="bg-white py-2 px-5 rounded-lg border">
        Outline
      </button>
    </div>

    <div className="border leading-none h-full rounded-lg bg-gradient-to-r from-[#4ade80] to-[#e879f9] p-0.5">
      <button className="bg-white py-2 px-5 rounded-lg border">
        Outline
      </button>
    </div>

    <div className="border leading-none h-full rounded-lg bg-gradient-to-r from-[#c026d3] to-[#db2777] p-0.5">
      <button className="bg-white py-2 px-5 rounded-lg border">
        Outline
      </button>
    </div>
</div>`;
  return (
    <>
      <CardContainer
        title={"Outlined Gradient Buttons"}
        description={
          "Buttons can be outlined gradient. Check out code for detail of usage."
        }
        jsxCodeString={codeString}
      />
    </>
  );
};
export default OutlinedGradientButtons;
