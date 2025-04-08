import {
  BadgeElement,
  RoundedBadge,
  GlowBadge,
  OutlinedBadge,
  SoftColorBadge,
  BadgeWithDots,
  BadgeWithDotsBg,
  BadgeWithIcon,
} from "@/components/elements/badge";

const Badge = () => {
  return (
    <div className="space-y-5">
      <BadgeElement />
      <RoundedBadge />
      <GlowBadge />
      <OutlinedBadge />
      <SoftColorBadge />
      <BadgeWithDots />
      <BadgeWithDotsBg />
      <BadgeWithIcon />
    </div>
  );
};

export default Badge;
