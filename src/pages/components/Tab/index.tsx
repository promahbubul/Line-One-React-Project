import {
  BasicTabs,
  BorderBottom,
  TabWithIcon,
  BoxedTabs,
  BoxedTabsWithIcon,
} from "@/components/components/tab";

const Tab = () => {
  return (
    <div className="space-y-5">
      <BasicTabs />
      <BorderBottom />
      <TabWithIcon />
      <BoxedTabs />
      <BoxedTabsWithIcon />
    </div>
  );
};

export default Tab;
