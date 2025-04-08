import CardContainer from "@/components/ui/CardContainer";

const DisabledButton = () => {
  const codeString = `<div className="flex flex-wrap gap-3">
    <button className="py-1.5 px-5 bg-[#F3F4F6] rounded-md font-medium text-[#1F2937] opacity-60">Default</button>
    <button className="py-1.5 px-5 bg-[#0070f3] rounded-md font-medium text-white opacity-60">Primary</button>
    <button className="py-1.5 px-5 bg-[#6B7280] rounded-md font-medium text-white opacity-60">Secondary</button>
    <button className="py-1.5 px-5 bg-[#17A2B8] rounded-md font-medium text-white opacity-60">Info</button>
    <button className="py-1.5 px-5 bg-[#10B981] rounded-md font-medium text-white opacity-60">Success</button>
    <button className="py-1.5 px-5 bg-[#F59E0B] rounded-md font-medium text-white opacity-60">Warning</button>
    <button className="py-1.5 px-5 bg-[#EF4444] rounded-md font-medium text-white opacity-60">Error</button>
</div>`;
  return (
    <CardContainer
      title={"Disabled Button"}
      description={
        "Buttons have their own style when disabled. Check out code for detail of usage."
      }
      jsxCodeString={codeString}
    />
  );
};
export default DisabledButton;
