import {
  BasicBreadcrumb,
  Separators,
  WithIcon,
  BorderedBreadcrumb,
} from "@/components/elements/breadcrumb";

const Breadcrumb = () => {
  return (
    <div className="space-y-5">
      <BasicBreadcrumb />
      <Separators />
      <WithIcon />
      <BorderedBreadcrumb />
    </div>
  );
};

export default Breadcrumb;
