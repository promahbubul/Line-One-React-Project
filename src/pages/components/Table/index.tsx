import {
  BasicTable,
  BorderBottom,
  HoveredRows,
  ZebraTable,
  FullWidthTable,
  FullWidthZebraTable,
} from "@/components/components/table";

const Table = () => {
  return (
    <div className="">
      <BasicTable />
      <BorderBottom />
      <HoveredRows />
      <ZebraTable />
      <FullWidthTable />
      <FullWidthZebraTable />
    </div>
  );
};

export default Table;
