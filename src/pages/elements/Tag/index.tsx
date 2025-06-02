import {
  TagElement,
  RoundedTag,
  BorderedTag,
  TagGroup,
} from "@/components/elements/tag";

const Tag = () => {
  return (
    <div className="space-y-5">
      <TagElement />
      <RoundedTag />
      <BorderedTag />
      <TagGroup />
    </div>
  );
};

export default Tag;
