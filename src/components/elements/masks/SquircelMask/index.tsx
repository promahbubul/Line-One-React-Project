import { maskImages } from "@/assets/images";
import CardContainer from "@/components/ui/CardContainer";

const SquircelMask = () => {
  const codeStrng = `<div
    style={{
      maskImage: \`url(\${mask})\`,
      maskSize: "cover",
    }}
    className='bg-[url("https://lineone.piniastudio.com/images/avatar/avatar-12.jpg")] h-40 w-40 bg-center'
  ></div>`;

  return (
    <div>
      <CardContainer
        title="Squircle Mask"
        description="Mask crops the content of the element to common shapes. The mask can crop the shape of squircle. Check out code for detail of usage."
        bindings={{
          mask: maskImages.squirecelMask,
        }}
        jsxCodeString={codeStrng}
      />
    </div>
  );
};

export default SquircelMask;
