import {
  BasicProgress,
  SoftColorProgress,
  ProgressSize,
  ActiveProgress,
  ProgressIndeterminate,
} from "@/components/elements/progress";

const Progress = () => {
  return (
    <div className="space-y-5">
      <BasicProgress />
      <SoftColorProgress />
      <ProgressSize />
      <ActiveProgress />
      <ProgressIndeterminate />
    </div>
  );
};

export default Progress;
