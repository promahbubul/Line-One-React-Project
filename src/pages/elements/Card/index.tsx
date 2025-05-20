import {
  BorderedCard,
  ErrorCard,
  GlowCardInfo,
  GlowCardPrimary,
  GlowCardWarning,
  GradientCardOne,
  GradientCardThree,
  GradientCardTwo,
  InfoCard,
  OutlineGradientCardOne,
  OutlineGradientCardThree,
  OutlineGradientCardTwo,
  PrimaryCard,
  RoundedCard,
  SecondaryCard,
  SimpleCard,
  SuccessCard,
  WarningCard,
} from "@/components/elements/cards";

const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <SimpleCard />
      <RoundedCard />
      <BorderedCard />
      <PrimaryCard />
      <SecondaryCard />
      <InfoCard />
      <SuccessCard />
      <WarningCard />
      <ErrorCard />
      <GlowCardPrimary />
      <GlowCardWarning />
      <GlowCardInfo />
      <GradientCardOne />
      <GradientCardTwo />
      <GradientCardThree />
      <OutlineGradientCardOne />
      <OutlineGradientCardTwo />
      <OutlineGradientCardThree />
    </div>
  );
};

export default Card;
