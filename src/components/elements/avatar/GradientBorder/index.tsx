import CardContainer from "@/components/ui/CardContainer";

const GradientBorder = () => {
  const codeString = ` <div className="flex flex-row items-center gap-2">
      {/* Image 1 */}
      <div className="bg-gradient-to-r from-cyan-500 p-[2px] to-blue-500 inline-block rounded-full">
        <img
          src="https://lineone.piniastudio.com/images/avatar/avatar-16.jpg"
          alt=""
          className="border-4 size-20 border-white  rounded-full"
        />
      </div>
      <div className="bg-gradient-to-r from-[#ffb700] p-[2px] to-[#f64c00] inline-block rounded-full">
        <img
          src="https://lineone.piniastudio.com/images/avatar/avatar-16.jpg"
          alt=""
          className="border-4 size-20 border-white  rounded-full"
        />
      </div>
      <div className="bg-gradient-to-r from-cyan-500 p-[2px] to-blue-500 inline-block rounded-full">
        <img
          src="https://lineone.piniastudio.com/images/avatar/avatar-16.jpg"
          alt=""
          className="border-4 size-20 border-white  rounded-full"
        />
      </div>
      <div className="bg-gradient-to-r from-cyan-500 p-[2px] to-blue-500 inline-block rounded-full">
        <img
          src="https://lineone.piniastudio.com/images/avatar/avatar-16.jpg"
          alt=""
          className="border-4 size-20 border-white  rounded-full"
        />
      </div>
      <div className="bg-gradient-to-r from-cyan-500 p-[2px] to-blue-500 inline-block rounded-full">
        <img
          src="https://lineone.piniastudio.com/images/avatar/avatar-16.jpg"
          alt=""
          className="border-4 size-20 border-white  rounded-full"
        />
      </div>
    </div>`;
  return (
    <CardContainer
      title={"Gradient Border"}
      description={
        "Border avatars can be gradient colors. Check out code for detail of usage."
      }
      jsxCodeString={codeString}
    />
  );
};
export default GradientBorder;
