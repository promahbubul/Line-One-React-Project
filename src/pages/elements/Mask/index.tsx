import {
  DiamondMask,
  HeartMask,
  HexagonMask,
  OctagonMask,
  ReuleauxTriangleMask,
  SquircelMask,
  StarMask,
} from "@/components/elements/masks";

const Mask = () => {
  return (
    <div className="space-y-5">
      <SquircelMask />
      <ReuleauxTriangleMask />
      <DiamondMask />
      <HexagonMask />
      <OctagonMask />
      <StarMask />
      <HeartMask />
    </div>
  );
};

export default Mask;
