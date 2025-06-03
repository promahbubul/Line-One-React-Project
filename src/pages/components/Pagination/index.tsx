import {
  BasicPagination,
  RoundedPagination,
  DividedPagination,
  RoundedDividedPagination,
  PaginationSize,
} from "@/components/components/pagination";

const Pagination = () => {
  return (
    <div className="space-y-5">
      <BasicPagination />
      <RoundedPagination />
      <DividedPagination />
      <RoundedDividedPagination />
      <PaginationSize />
    </div>
  );
};

export default Pagination;
