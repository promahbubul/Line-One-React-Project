import { maskImages } from "@/assets/images";
import CardContainer from "@/components/ui/CardContainer";

const DiamondMask = () => {
  const codeString = `<div
    style={{
      maskImage: \`url(\${mask})\`,
      maskSize: "cover",
    }}
    className='bg-[url("https://lineone.piniastudio.com/images/avatar/avatar-12.jpg")] h-40 w-40 bg-center'
  ></div>`;
  return (
    <CardContainer
      title="Diamond Mask"
      description="Mask crops the content of the element to common shapes. The mask can crop the shape of diamond. Check out code for detail of usage."
      bindings={{
        mask: maskImages.diamondMask,
      }}
      jsxCodeString={codeString}
    />
  );
};

export default DiamondMask;
