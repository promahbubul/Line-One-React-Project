import {
  UsersTable,
  CollapsibleTable,
  TableWithFilter,
} from "@/components/components/tableadvanced";

const TableAdvanced = () => {
  return (
    <div className="space-y-5">
      <UsersTable />
      <CollapsibleTable />
      <TableWithFilter />
    </div>
  );
};

export default TableAdvanced;
