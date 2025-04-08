
import {
  ButtonComponent,
  RoundedButton,
  OutlinedButton,
  SoftColorButton,
  BorderedButton,
  FlatButton,
  GlowButtons,
  GradientButtons,
  OutlinedGradientButtons,
  WithIcons,
  OnlyIcons,
  ButtonSize,
  DisabledButton,
} from "@/components/elements/button";

const Button = () => {
  return (
    <div className="space-y-5">
      <ButtonComponent />
      <RoundedButton />
      <OutlinedButton />
      <SoftColorButton />
      <BorderedButton />
      <FlatButton />
      <GlowButtons />
      <GradientButtons />
      <OutlinedGradientButtons />
      <WithIcons />
      <OnlyIcons />
      <ButtonSize />
      <DisabledButton />
    </div>
  );
};

export default Button;
