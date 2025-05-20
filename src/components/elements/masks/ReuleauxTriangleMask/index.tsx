import { maskImages } from "@/assets/images";
import CardContainer from "@/components/ui/CardContainer";

const ReuleauxTriangleMask = () => {
  const codeString = `<div
    style={{
      maskImage: \`url(\${mask})\`,
      maskSize: "cover",
    }}
    className='bg-[url("https://lineone.piniastudio.com/images/avatar/avatar-12.jpg")] h-40 w-40 bg-center'
  ></div>`;
  return (
    <CardContainer
      title="Reuleaux Triangle Mask"
      description="Mask crops the content of the element to common shapes. The mask can crop the shape of reuleaux triangle. Check out code for detail of usage."
      bindings={{
        mask: maskImages.reuleaxTriangleMask,
      }}
      jsxCodeString={codeString}
    />
  );
};

export default ReuleauxTriangleMask;
