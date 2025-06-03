import {
  BasicCollapse,
  BorderBottom,
  FullBordered,
  DividedItems,
  PrimaryCollapse,
  AdvancedCollapse,
} from "@/components/components/collapse";

const Collapse = () => {
  return (
    <div className="space-y-5">
      <BasicCollapse />
      <BorderBottom />
      <FullBordered />
      <DividedItems />
      <PrimaryCollapse />
      <AdvancedCollapse />
    </div>
  );
};

export default Collapse;
