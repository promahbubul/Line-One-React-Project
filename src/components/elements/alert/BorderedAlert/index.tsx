import CardContainer from "@/components/ui/CardContainer";

const BorderedAlert = () => {
    const codeString = `<div className="flex flex-col gap-3 mt-5">
    <p className="text-base text-blue-600 border-2 border-blue-600 bg-blue-100 py-4 px-5 rounded-full">
        This is simple alert
    </p>
    <p className="text-base text-gray-800 border-l-8 border-gray-800 bg-gray-200 py-4 px-5 rounded-lg">
        This is simple alert
    </p>
    <p className="text-base text-cyan-600 bg-cyan-100 py-4 px-5 rounded-full">
        This is simple alert
    </p>
    <p className="text-base text-green-600 border-2 border-green-600 bg-green-100 py-4 px-5 rounded-lg">
        This is simple alert
    </p>
    <p className="flex flex-row gap-3 items-center text-base text-yellow-600 border-r-8 border-yellow-600 bg-yellow-100 py-4 px-5 rounded-lg">
        <BsExclamationTriangle className="text-yellow-600 text-xl" />
        This is simple alert
    </p>
    <p className="text-base text-red-600 flex flex-row gap-3 items-center border-2 border-red-600 py-4 px-5 rounded-lg">
        <FaExclamationCircle className="text-red-600 text-xl" />
        This is simple alert
    </p>
</div>
`;
  return (
    <CardContainer
      title={"Bordered Alert"}
      description={
        "Alerts can have a border. Check out code for detail of usage."
      }
      jsxCodeString={codeString}
    />
  );
};
export default BorderedAlert;
