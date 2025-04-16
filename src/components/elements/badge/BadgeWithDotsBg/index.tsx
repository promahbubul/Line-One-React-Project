import CardContainer from "@/components/ui/CardContainer";

const BadgeWithDotsBg = () => {
  const codeString = `<div className="flex flex-wrap gap-3">  
  <button className="py-1 px-3 flex flex-row items-center gap-1 text-blue-700 text-sm bg-blue-100 rounded-full font-medium">
    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>Primary
  </button>
  <button className="py-1 px-3 flex flex-row items-center gap-1 text-purple-700 text-sm bg-purple-100 rounded-full font-medium">
    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>Secondary
  </button>
  <button className="py-1 px-3 flex flex-row items-center gap-1 text-sky-700 text-sm bg-sky-100 rounded-full font-medium">
    <div className="w-2 h-2 bg-sky-600 rounded-full"></div>Info
  </button>
  <button className="py-1 px-3 flex flex-row items-center gap-1 text-green-700 text-sm bg-green-100 rounded-full font-medium">
    <div className="w-2 h-2 bg-green-600 rounded-full"></div>Success
  </button>
  <button className="py-1 px-3 flex flex-row items-center gap-1 text-yellow-700 text-sm bg-yellow-100 rounded-full font-medium">
    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>Warning
  </button>
  <button className="py-1 px-3 flex flex-row items-center gap-1 text-red-700 text-sm bg-red-100 rounded-full font-medium">
    <div className="w-2 h-2 bg-red-600 rounded-full"></div>Error
  </button>

</div>`;
  return (
    <CardContainer
      title={"Badge With Dots"}
      description={
        "Badges can have a soft colors and a dot attached to it. Check out code for detail of usage."
      }
      jsxCodeString={codeString}
    />
  );
};
export default BadgeWithDotsBg;
