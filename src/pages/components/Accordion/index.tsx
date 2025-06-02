import {
  BasicAccordion,
  BorderedBottom,
  FullBordered,
  DividedItems,
  PrimaryAccordion,
  AdvancedAccordion,
} from "@/components/components/accordion/";

const Accordion = () => {
  return (
    <div className="space-y-5">
      <BasicAccordion />
      <BorderedBottom />
      <FullBordered />
      <DividedItems />
      <PrimaryAccordion />
      <AdvancedAccordion />
    </div>
  );
};

export default Accordion;
