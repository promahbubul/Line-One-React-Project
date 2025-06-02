import {
  BasicTooltip,
  TooltipPosition,
  TooltipDelayDuration,
  TooltipTrigger,
  FollowCursor,
  HTMLContentTooltip,
} from "@/components/elements/tooltip";

const Tooltip = () => {
  return (
    <div className="space-y-5">
      <BasicTooltip />
      <TooltipPosition />
      <TooltipDelayDuration />
      <TooltipTrigger />
      <FollowCursor />
      <HTMLContentTooltip />
    </div>
  );
};

export default Tooltip;
