import {
  BasicTreeView,
  AdvancedTreeView,
} from "@/components/components/treeview";

const Treeview = () => {
  return (
    <div className="space-y-5">
      <BasicTreeView />
      <AdvancedTreeView />
    </div>
  );
};

export default Treeview;
