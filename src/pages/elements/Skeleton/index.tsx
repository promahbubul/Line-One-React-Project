import {
  BasicSkeleton,
  PostSkeleton,
  PostSkeletonTwo,
  PulseSkeleton,
  PulseSkeletonTwo,
  PulseSkeletonThree,
} from "@/components/elements/skeleton";

const Skeleton = () => {
  return (
    <div className="space-y-5">
      <BasicSkeleton />
      <PostSkeleton />
      <PostSkeletonTwo />
      <PulseSkeleton />
      <PulseSkeletonTwo />
      <PulseSkeletonThree />
    </div>
  );
};

export default Skeleton;
