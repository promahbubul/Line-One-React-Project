import {
  BasicDropdown,
  DropdownIcons,
  HTMLContent,
  PrimaryActions,
  ScrolledDropdown,
} from "@/components/components/dropdown";

const Dropdown = () => {
  return (
    <div className="space-y-5">
      <BasicDropdown />
      <DropdownIcons />
      <HTMLContent />
      <PrimaryActions />
      <ScrolledDropdown />
    </div>
  );
};

export default Dropdown;
