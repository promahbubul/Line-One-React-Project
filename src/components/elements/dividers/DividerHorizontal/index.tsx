import CardContainer from "@/components/ui/CardContainer";

const DividerHorizontal = () => {
  const codeString = ` <div className="flex">
  <div className="flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500">
    <p className="text-xl">Content</p>
  </div>
  <div className="mx-4 flex flex-col items-center space-y-3">
    <div className="w-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
    <p>OR</p>
    <div className="w-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
  </div>
  <div className="flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500">
    <p className="text-xl">Content</p>
  </div>
</div>`;
  return (
    <CardContainer title={"Divider Horizontal"} description={""} jsxCodeString={codeString} />
  );
};

export default DividerHorizontal;
