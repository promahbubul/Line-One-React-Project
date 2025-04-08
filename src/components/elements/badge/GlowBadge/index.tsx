import CardContainer from "@/components/ui/CardContainer"

const GlowBadge = () => {
    const codeString = `<div className="flex flex-wrap gap-3">
  <button className="py-1 px-3 text-slate-900 text-sm bg-gray-200 rounded-md font-medium shadow-md shadow-gray-300">Default</button>
  <button className="py-1 px-3 text-white text-sm bg-blue-600 rounded-md font-medium shadow-md shadow-blue-400">Primary</button>
  <button className="py-1 px-3 text-white text-sm bg-purple-600 rounded-md font-medium shadow-md shadow-purple-400">Secondary</button>
  <button className="py-1 px-3 text-white text-sm bg-sky-500 rounded-md font-medium shadow-md shadow-sky-300">Info</button>
  <button className="py-1 px-3 text-white text-sm bg-green-600 rounded-md font-medium shadow-md shadow-green-400">Success</button>
  <button className="py-1 px-3 text-white text-sm bg-yellow-500 rounded-md font-medium shadow-md shadow-yellow-300">Warning</button>
  <button className="py-1 px-3 text-white text-sm bg-red-600 rounded-md font-medium shadow-md shadow-red-400">Error</button>
</div>`;
  return (
    <CardContainer title={"Glow Badge"} description={"Badges can be glow. To do this, you should use colored shadows. Check out code for detail of usage."} jsxCodeString={codeString} />
  );
}
export default GlowBadge