import CardContainer from "@/components/ui/CardContainer";

const OutlinedAlert = () => {
  const codeString = `<div className="flex flex-col gap-3 mt-5">
    <p className="text-base text-gray-800 border-2 border-gray-200 py-4 px-5 rounded-lg">
        This is simple alert
    </p>
    <p className="text-base text-blue-500 border-2 border-blue-500 py-4 px-5 rounded-lg">
        This is simple alert
    </p>
    <p className="text-base text-gray-500 border-2 border-gray-500 py-4 px-5 rounded-lg">
        This is simple alert
    </p>
    <p className="text-base text-cyan-500 border-2 border-cyan-500 py-4 px-5 rounded-lg">
        This is simple alert
    </p>
    <p className="text-base text-green-500 border-2 border-green-500 py-4 px-5 rounded-lg">
        This is simple alert
    </p>
    <p className="text-base text-yellow-500 border-2 border-yellow-500 py-4 px-5 rounded-lg">
        This is simple alert
    </p>
    <p className="text-base text-red-500 border-2 border-red-500 py-4 px-5 rounded-lg">
        This is simple alert
    </p>
</div>
`;
  return (
    <CardContainer
      title={"Outlined Alert"}
      description={"Alerts can be outlied. Check out code for detail of usage."}
      jsxCodeString={codeString}
    />
  );
};
export default OutlinedAlert;
