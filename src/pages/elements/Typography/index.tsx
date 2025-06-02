import {
  BasicHeading,
  LightHeading,
  BoldHeading,
  ColoredHeading,
  DisplayHeading,
  GradientText,
  TextDecoration,
  TextDecorationColor,
  TextDecorationStyle,
} from "@/components/elements/typography";

const Typography = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <BasicHeading />
      <LightHeading />
      <BoldHeading />
      <ColoredHeading />
      <DisplayHeading />
      <GradientText />
      <TextDecoration />
      <TextDecorationColor />
      <TextDecorationStyle />
    </div>
  );
};

export default Typography;
