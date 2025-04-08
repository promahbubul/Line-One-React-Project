import CardContainer from "@/components/ui/CardContainer";

const ButtonComponent = () => {
  const codeString = `<div className="flex flex-wrap gap-3">
    <button className="py-1.5 px-5 bg-gray-200 rounded-md font-medium text-slate-800 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400">
      Default
    </button>
    <button className="py-1.5 px-5 bg-blue-500 rounded-md font-medium text-white hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700">
      Primary
    </button>
    <button className="py-1.5 px-5 bg-purple-500 rounded-md font-medium text-white hover:bg-purple-600 focus:bg-purple-600 active:bg-purple-700">
      Secondary
    </button>
    <button className="py-1.5 px-5 bg-sky-500 rounded-md font-medium text-white hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-700">
      Info
    </button>
    <button className="py-1.5 px-5 bg-green-500 rounded-md font-medium text-white hover:bg-green-600 focus:bg-green-600 active:bg-green-700">
      Success
    </button>
    <button className="py-1.5 px-5 bg-yellow-500 rounded-md font-medium text-white hover:bg-yellow-600 focus:bg-yellow-600 active:bg-yellow-700">
      Warning
    </button>
    <button className="py-1.5 px-5 bg-red-500 rounded-md font-medium text-white hover:bg-red-600 focus:bg-red-600 active:bg-red-700">
      Error
    </button>
</div>`;
  return (
    <CardContainer
      title={"Button"}
      description={
        "Use Button component for actions in forms, dialogs, and more with support for multiple sizes, states, and more. Check out code for detail of usage."
      }
      jsxCodeString={codeString}
    />
  );
};
export default ButtonComponent;
