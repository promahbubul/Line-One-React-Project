import {
  DividerVertical,
  WithoutText,
  DividerHorizontal,
  DividerHorizontalWithoutText,
} from "@/components/elements/dividers";

const Divider = () => {
  return (
    <div className="space-y-5">
      <DividerVertical />
      <WithoutText />
      <DividerHorizontal />
      <DividerHorizontalWithoutText />
    </div>
  );
};

export default Divider;
