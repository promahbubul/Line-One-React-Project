import CardContainer from "@/components/ui/CardContainer";
import { FaUser } from "react-icons/fa6";

const AvatarSkeleton = () => {
  const codeString = `<div className="flex flex-row -space-x-4">
  <div className="bg-[#f0f0f0] border-4 border-white px-3 py-3 rounded-full flex justify-center items-center">
    <FaUser className="text-white text-xl" />
  </div>
  <div className="bg-[#f0f0f0] border-4 border-white px-3 py-3 rounded-full flex justify-center items-center">
    <FaUser className="text-white text-xl" />
  </div>
  <div className="bg-[#f0f0f0] border-4 border-white px-3 py-3 rounded-full flex justify-center items-center">
    <FaUser className="text-white text-xl" />
  </div>
  <div className="bg-[#f0f0f0] border-4 border-white px-3 py-3 rounded-full flex justify-center items-center">
    <FaUser className="text-white text-xl" />
  </div>
  <div className="bg-[#f0f0f0] border-4 border-white px-3 py-3 rounded-full flex justify-center items-center">
    <FaUser className="text-white text-xl" />
  </div>
</div>`;
  return (
    <CardContainer
      title={"Avatar Skeleton"}
      description={
        "It is also possible to use a skeleton to preview photos. Check out code for detail of usage."
      }
      components={{ FaUser }}
      jsxCodeString={codeString}
    />
  );
};
export default AvatarSkeleton;
