import {
  BasicPopover,
  AdvancedPopover,
  FormPopover,
  ProfilePopover,
  ProfilePopoverTwo,
} from "@/components/components/popover";

const Popover = () => {
  return (
    <div className="space-y-5">
      <BasicPopover />
      <AdvancedPopover />
      <FormPopover />
      <ProfilePopover />
      <ProfilePopoverTwo />
    </div>
  );
};

export default Popover;
