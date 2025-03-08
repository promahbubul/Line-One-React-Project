import CardContainer from "@/components/ui/CardContainer";

const SquircleAvatar = () => {
  const codeString = `
  <div className="flex flex-row items-end gap-3">
        <img
          src="https://i.ibb.co.com/ks6wCf73/avatar-1.jpg"
          alt=""
          className="size-8 rounded-[32%]"
        />
        <img
          src="https://i.ibb.co.com/qYh3q4KJ/avatar-7.jpg"
          alt=""
          className="size-12 rounded-[32%]"
        />
        <img
          src="https://i.ibb.co.com/kVzWMDp8/avatar-6.jpg"
          alt=""
          className="size-14 rounded-[32%]"
        />
        <img
          src="https://i.ibb.co.com/9Hmtg3Q1/avatar-5.jpg"
          alt=""
          className="size-16 rounded-[32%]"
        />
        <img
          src="https://i.ibb.co.com/mgjtdRn/avatar-4.jpg"
          alt=""
          className="size-20 rounded-[32%]"
        />
        <img
          src="https://i.ibb.co.com/yFryjXfB/avatar-3.jpg"
          alt=""
          className="size-24 rounded-[32%]"
        />
      </div>`;
  return (
    <div>
      <CardContainer
        title={"Squircle Avatar"}
        description={
          "Avatars can have a squircle shape. To do this, you should use the mask is-squircle classes. Check out code for detail of usage."
        }
        jsxCodeString={codeString}
      />
    </div>
  );
};
export default SquircleAvatar;
