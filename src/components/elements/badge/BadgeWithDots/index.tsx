import CardContainer from "@/components/ui/CardContainer";

const BadgeWithDots = () => {
  const codeString = `<div className="flex flex-wrap gap-3">
  <button className="flex justify-center items-center gap-2 py-1 px-3 text-gray-700 text-sm rounded-full font-medium">
    <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
    <span>Default</span>
  </button>

  <button className="flex justify-center items-center gap-2 py-1 px-3 text-blue-600 text-sm rounded-full font-medium">
    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
    <span>Primary</span>
  </button>

  <button className="flex justify-center items-center gap-2 py-1 px-3 text-purple-600 text-sm rounded-full font-medium">
    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
    <span>Secondary</span>
  </button>

  <button className="flex justify-center items-center gap-2 py-1 px-3 text-sky-600 text-sm rounded-full font-medium">
    <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
    <span>Info</span>
  </button>

  <button className="flex justify-center items-center gap-2 py-1 px-3 text-green-600 text-sm rounded-full font-medium">
    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
    <span>Success</span>
  </button>

  <button className="flex justify-center items-center gap-2 py-1 px-3 text-yellow-600 text-sm rounded-full font-medium">
    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
    <span>Warning</span>
  </button>

  <button className="flex justify-center items-center gap-2 py-1 px-3 text-red-600 text-sm rounded-full font-medium">
    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
    <span>Error</span>
  </button>

</div>
`;
  return (
    <CardContainer
      title={"Badge With Dots"}
      description={
        "Badges can have a soft colors. To do this, you should use some opacity. Check out code for detail of usage."
      }
      jsxCodeString={codeString}
    />
  );
};
export default BadgeWithDots;
