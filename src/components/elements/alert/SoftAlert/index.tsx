import CardContainer from "@/components/ui/CardContainer";

const SoftAlert = () => {
  const codeString = `<div className="flex flex-col gap-3 mt-5">
    <p className="text-base text-blue-600 bg-blue-100 py-4 px-5 rounded-full">
        This is simple alert
    </p>
    <p className="text-base text-gray-800 bg-gray-200 py-4 px-5 rounded-full">
        This is simple alert
    </p>
    <p className="text-base text-cyan-600 bg-cyan-100 py-4 px-5 rounded-full">
        This is simple alert
    </p>
    <p className="text-base text-green-600 bg-green-100 py-4 px-5 rounded-full">
        This is simple alert
    </p>
    <p className="text-base text-yellow-600 bg-yellow-100 py-4 px-5 rounded-full">
        This is simple alert
    </p>
    <p className="text-base text-red-600 bg-red-100 py-4 px-5 rounded-full">
        This is simple alert
    </p>
</div>
`;
  return (
    <CardContainer
      title={"Soft Alert"}
      description={
        "Alerts can have a soft colors. To do this, you should use some opacity. Check out code for detail of usage."
      }
      jsxCodeString={codeString}
    />
  );
};
export default SoftAlert;
