import {
  BasicTimeLine,
  WithLineSpace,
  OutlinedPoint,
  TimeLineWithPing,
  PingAndLineSpace,
  AdvancedTimeLine,
  AdvancedTimeLineTwo,
} from "@/components/components/timeline";

const Timeline = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-5">
        <BasicTimeLine />
        <WithLineSpace />
        <OutlinedPoint />
        <TimeLineWithPing />
        <PingAndLineSpace />
        <AdvancedTimeLine />
        <AdvancedTimeLineTwo />
      </div>
    </div>
  );
};

export default Timeline;
