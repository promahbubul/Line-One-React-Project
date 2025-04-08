import CardContainer from "@/components/ui/CardContainer"

const RoundedBadge = () => {
    const codeString = `<div className="flex flex-wrap gap-3">
  <button className="py-1 px-3 text-slate-900 text-sm bg-gray-200 rounded-full font-medium">Default</button>
  <button className="py-1 px-3 text-white text-sm bg-blue-600 rounded-full font-medium">Primary</button>
  <button className="py-1 px-3 text-white text-sm bg-purple-600 rounded-full font-medium">Secondary</button>
  <button className="py-1 px-3 text-white text-sm bg-sky-500 rounded-full font-medium">Info</button>
  <button className="py-1 px-3 text-white text-sm bg-green-600 rounded-full font-medium">Success</button>
  <button className="py-1 px-3 text-white text-sm bg-yellow-500 rounded-full font-medium">Warning</button>
  <button className="py-1 px-3 text-white text-sm bg-red-600 rounded-full font-medium">Error</button>
  <button className="py-1 px-3 text-white text-sm bg-slate-950 rounded-full font-medium">Dark</button>
  <button className="py-1 px-3 text-slate-900 text-sm bg-gray-100 rounded-full font-medium">Light</button>
</div>`;
  return (
    <CardContainer title={"Rounded Badge"} description={"Badges can have a rounded shape. To do this, you should use the rounded-full utility Check out code for detail of usage."} jsxCodeString={codeString} />
  );
}
export default RoundedBadge