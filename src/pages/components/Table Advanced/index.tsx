import {
  UsersTable,
  CollapsibleTable,
  TableWithFilter,
} from "@/components/components/tableadvanced";

const TableAdvanced = () => {
  return (
    <div>
      <UsersTable />
      <CollapsibleTable />
      <TableWithFilter />
    </div>
  );
};

export default TableAdvanced;
