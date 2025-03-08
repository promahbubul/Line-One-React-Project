import CardContainer from "@/components/ui/CardContainer";

const BasicAlert = () => {
  const codeString = `<div className="flex flex-col gap-3 mt-5">
    <p className="text-base text-gray-800 bg-gray-200 py-4 px-5 rounded-lg">
        This is simple alert
    </p>
    <p className="text-base text-white bg-blue-500 py-4 px-5 rounded-lg">
        This is simple alert
    </p>
    <p className="text-base text-white bg-gray-500 py-4 px-5 rounded-lg">
        This is simple alert
    </p>
    <p className="text-base text-white bg-cyan-500 py-4 px-5 rounded-lg">
        This is simple alert
    </p>
    <p className="text-base text-white bg-green-500 py-4 px-5 rounded-lg">
        This is simple alert
    </p>
    <p className="text-base text-white bg-yellow-500 py-4 px-5 rounded-lg">
        This is simple alert
    </p>
    <p className="text-base text-white bg-red-500 py-4 px-5 rounded-lg">
        This is simple alert
    </p>
</div>
`;
  return (
    <CardContainer
      title={"Basic Alert"}
      description={
        "The alert component is used to convey important information to the user through the use of contextual types, icons, and colors"
      }
      jsxCodeString={codeString}
    />
  );
};
export default BasicAlert;
