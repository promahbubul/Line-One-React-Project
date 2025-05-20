import { maskImages } from "@/assets/images";
import CardContainer from "@/components/ui/CardContainer";

const HexagonMask = () => {
  const codeString = `<div className="flex flex-row gap-5 items-center">
    <div
    style={{
      maskImage: \`url(\${mask})\`,
      maskSize: "cover",
    }}
    className='bg-[url("https://lineone.piniastudio.com/images/avatar/avatar-12.jpg")] h-40 w-40 bg-center'
  ></div>
  <div
    style={{
      maskImage: \`url(\${mask})\`,
      maskSize: "cover",
    }}
    className='bg-[url("https://lineone.piniastudio.com/images/avatar/avatar-12.jpg")] rotate-90 h-40 w-40 bg-center'
  ></div>
  </div>`;
  return (
    <CardContainer
      title="Hexagon Mask"
      description="Mask crops the content of the element to common shapes. The mask can crop the shape of hexagon. Check out code for detail of usage."
      bindings={{
        mask: maskImages.hexagonMask,
        
      }}
      jsxCodeString={codeString}
    />
  );
};

export default HexagonMask;
