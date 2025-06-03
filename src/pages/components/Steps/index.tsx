import {
  BasicSteps,
  PrimarySteps,
  WithLineSpace,
  StepsSize,
  VerticalSteps,
  VerticalWithLineSpace,
  ColoredSteps,
} from "@/components/components/steps";

const Steps = () => {
  return (
    <div className="space-y-5">
      <BasicSteps />
      <PrimarySteps />
      <WithLineSpace />
      <StepsSize />
      <VerticalSteps />
      <VerticalWithLineSpace />
      <ColoredSteps />
    </div>
  );
};

export default Steps;
