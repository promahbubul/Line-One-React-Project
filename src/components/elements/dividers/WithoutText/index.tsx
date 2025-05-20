import CardContainer from "@/components/ui/CardContainer";

const WithoutText = () => {
  const codeString = `<div className="flex flex-col">
    <div
      className="flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500"
    >
      <p className="text-xl">Content</p>
    </div>
    <div className="my-4 h-px  bg-slate-200 dark:bg-navy-500"></div>
    <div
      className="flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500"
    >
      <p className="text-xl">Content</p>
    </div>
  </div>`;
  return (
    <CardContainer
      title={"Without Text"}
      description={""}
      jsxCodeString={codeString}
    />
  );
};

export default WithoutText;
