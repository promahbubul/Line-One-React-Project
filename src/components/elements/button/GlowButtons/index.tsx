import CardContainer from "@/components/ui/CardContainer";

const GlowButtons = () => {
  const codeString = `<div className='flex flex-wrap gap-3'>
    <button className='py-1.5 px-5 bg-[#e2e8f0] rounded-md font-medium text-slate-800 hover:bg-[#cbd5e1] focus:bg-[#cbd5e1] active:bg-[#cbd5e1] shadow-md hover:shadow-md'>Default</button>
    <button className='py-1.5 px-5 bg-[#3b82f6] rounded-md font-medium text-white hover:bg-[#2563eb] focus:bg-[#2563eb] active:bg-[#1d4ed8] shadow-md hover:shadow-md'>Primary</button>
    <button className='py-1.5 px-5 bg-[#9333ea] rounded-md font-medium text-white hover:bg-[#7e22ce] focus:bg-[#7e22ce] active:bg-[#6b21a8] shadow-md hover:shadow-md'>Secondary</button>
    <button className='py-1.5 px-5 bg-[#0ea5e9] rounded-md font-medium text-white hover:bg-[#0284c7] focus:bg-[#0284c7] active:bg-[#0369a1] shadow-md hover:shadow-md'>Info</button>
    <button className='py-1.5 px-5 bg-[#22c55e] rounded-md font-medium text-white hover:bg-[#16a34a] focus:bg-[#16a34a] active:bg-[#15803d] shadow-md hover:shadow-md'>Success</button>
    <button className='py-1.5 px-5 bg-[#eab308] rounded-md font-medium text-white hover:bg-[#ca8a04] focus:bg-[#ca8a04] active:bg-[#a16207] shadow-md hover:shadow-md'>Warning</button>
    <button className='py-1.5 px-5 bg-[#ef4444] rounded-md font-medium text-white hover:bg-[#dc2626] focus:bg-[#dc2626] active:bg-[#b91c1c] shadow-md hover:shadow-md'>Error</button>
</div>
`;
  return (
    <CardContainer
      title={"Glow buttons"}
      description={
        "Buttons can be glow. To do this, you should use colored shadows. Check out code for detail of usage."
      }
      jsxCodeString={codeString}
    />
  );
};
export default GlowButtons;
