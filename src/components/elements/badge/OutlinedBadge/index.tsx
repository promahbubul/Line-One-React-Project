import CardContainer from "@/components/ui/CardContainer";

const OutlinedBadge = () => {
  const codeString = `<div className="flex flex-wrap gap-3">
  <button className="py-1 px-3 text-slate-800 text-sm border border-slate-300 rounded-full font-medium">Default</button>
  <button className="py-1 px-3 text-blue-600 text-sm border border-blue-600 rounded-full font-medium">Primary</button>
  <button className="py-1 px-3 text-purple-600 text-sm border border-purple-600 rounded-full font-medium">Secondary</button>
  <button className="py-1 px-3 text-sky-500 text-sm border border-sky-500 rounded-full font-medium">Info</button>
  <button className="py-1 px-3 text-green-600 text-sm border border-green-600 rounded-full font-medium">Success</button>
  <button className="py-1 px-3 text-yellow-500 text-sm border border-yellow-500 rounded-full font-medium">Warning</button>
  <button className="py-1 px-3 text-red-600 text-sm border border-red-600 rounded-full font-medium">Error</button>
</div>
`;
  return (
    <CardContainer
      title={"Outlined Badge"}
      description={""}
      jsxCodeString={codeString}
    />
  );
};
export default OutlinedBadge;
