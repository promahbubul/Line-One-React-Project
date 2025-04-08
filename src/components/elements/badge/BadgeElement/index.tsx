import CardContainer from "@/components/ui/CardContainer"

const BadgeElement = () => {
    const codeString = `<div className="flex flex-wrap gap-3">
  <button className="py-1 px-3 text-[#1e293b] text-sm bg-[#f1f5f9] rounded-md font-medium">Default</button>
  <button className="py-1 px-3 text-white text-sm bg-[#3b82f6] rounded-md font-medium">Primary</button>
  <button className="py-1 px-3 text-white text-sm bg-[#6366f1] rounded-md font-medium">Secondary</button>
  <button className="py-1 px-3 text-white text-sm bg-[#0ea5e9] rounded-md font-medium">Info</button>
  <button className="py-1 px-3 text-white text-sm bg-[#22c55e] rounded-md font-medium">Success</button>
  <button className="py-1 px-3 text-white text-sm bg-[#eab308] rounded-md font-medium">Warning</button>
  <button className="py-1 px-3 text-white text-sm bg-[#ef4444] rounded-md font-medium">Error</button>
  <button className="py-1 px-3 text-white text-sm bg-[#020617] rounded-md font-medium">Dark</button>
  <button className="py-1 px-3 text-[#1e293b] text-sm bg-[#f8fafc] rounded-md font-medium">Light</button>
</div>`;
  return (
    <>
      <CardContainer
        title={"Badge Element"}
        description={"Badges are used to inform user of the status of specific data. Check out code for detail of usage."}
        jsxCodeString={codeString}
      />
    </>
  );
}
export default BadgeElement