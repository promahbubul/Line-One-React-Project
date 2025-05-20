import CardContainer from "@/components/ui/CardContainer";

const DividerVertical = () => {
  const codeString = ` <div className="flex flex-col">
        <div className="flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500">
          <p className="text-xl">Content</p>
        </div>
        <div className="my-4 flex items-center space-x-3">
          <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
          <p>OR</p>
          <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500"></div>
        </div>
        <div className="flex h-20 w-full items-center justify-center rounded-lg bg-slate-200 dark:bg-navy-500">
          <p className="text-xl">Content</p>
        </div>
      </div>`;
  return <CardContainer title={"Divider Vertical"} description={""} jsxCodeString={codeString} />;
};

export default DividerVertical;
