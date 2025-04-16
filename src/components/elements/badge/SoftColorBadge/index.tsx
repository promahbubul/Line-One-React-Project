import CardContainer from "@/components/ui/CardContainer";

const SoftColorBadge = () => {
  const codeString = `<div className="flex flex-wrap gap-3">
  <button className="py-1 px-3 text-blue-700 text-sm bg-blue-100 rounded-md font-medium">Primary</button>
  <button className="py-1 px-3 text-purple-700 text-sm bg-purple-100 rounded-md font-medium">Secondary</button>
  <button className="py-1 px-3 text-sky-700 text-sm bg-sky-100 rounded-md font-medium">Info</button>
  <button className="py-1 px-3 text-green-700 text-sm bg-green-100 rounded-md font-medium">Success</button>
  <button className="py-1 px-3 text-yellow-700 text-sm bg-yellow-100 rounded-md font-medium">Warning</button>
  <button className="py-1 px-3 text-red-700 text-sm bg-red-100 rounded-md font-medium">Error</button>
</div>`;
  return (
    <CardContainer
      title={"Soft Color Badge"}
      description={""}
      jsxCodeString={codeString}
    />
  );
};
export default SoftColorBadge;
