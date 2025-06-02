import {
  BasicSpinner,
  ElasticTimingFunction,
  SoftColorSpinner,
  SoftElsaticSpinner,
  GrowSpinner,
  SVGSpinner,
  SVGSpinnerElastic,
  SpinnerSize,
} from "@/components/elements/spinner";

const Spinner = () => {
  return (
    <div className="space-y-5">
      <BasicSpinner />
      <ElasticTimingFunction />
      <SoftColorSpinner />
      <SoftElsaticSpinner />
      <GrowSpinner />
      <SVGSpinner />
      <SVGSpinnerElastic />
      <SpinnerSize />
    </div>
  );
};

export default Spinner;
