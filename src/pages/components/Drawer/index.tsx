import {
  BasicDrawer,
  DropdownIcons,
  HTMLContent,
  PrimaryDrawer,
  ScrolledDropdown,
} from "@/components/components/drawer";

const Drawer = () => {
  return (
    <div className="space-y-5">
      <BasicDrawer />
      <PrimaryDrawer />
      <DropdownIcons />
      <ScrolledDropdown />
      <HTMLContent />
    </div>
  );
};

export default Drawer;
