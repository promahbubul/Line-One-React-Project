import {
  AvatarDotColors,
  AvatarDotPing,
  AvatarDotPosition,
  AvatarGroup,
  AvatarSkeleton,
  AvatarWithDots,
  BorderedInitialAvatar,
  GradientBorder,
  InitialAvatar,
  InitialWithDots,
  RoundeAvatar,
  SoftInitialAvatar,
  SquareAvatar,
  SquareAvatarGroup,
  SquareInitialAvatar,
  SquareSoftInitial,
  SquircleAvatar,
  SquircleAvatarDots,
  SquircleInitialAvatar,
} from "@/components/elements/avatar";

const Avatar = () => {
  return (
    <div className="space-y-5">
      <RoundeAvatar />
      <SquareAvatar />
      <SquircleAvatar />
      <InitialAvatar />
      <SquareInitialAvatar />
      <SquircleInitialAvatar />
      <SoftInitialAvatar />
      <BorderedInitialAvatar />
      <SquareSoftInitial />
      {/* // <GradientBorder /> */}
    </div>
  );
};

export default Avatar;
