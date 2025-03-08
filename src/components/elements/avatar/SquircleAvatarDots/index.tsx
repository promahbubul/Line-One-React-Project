import CardContainer from "@/components/ui/CardContainer";

const SquircleAvatarDots = () => {
  const codeString = `<div className="flex flex-row gap-4 items-baseline">
    <div className="relative">
      <div className="bg-indigo-600 border-2 border-white absolute right-0 h-2 w-2 rounded-full" />
      <img
         src="https://i.ibb.co.com/ks6wCf73/avatar-1.jpg"
        className="rounded-[35%]  w-8 h-8"
      />
    </div>
    <div className="relative">
      <div className="bg-indigo-600 absolute border-2 border-white right-0 h-3 w-3 rounded-full" />
      <img
         src="https://i.ibb.co.com/qYh3q4KJ/avatar-7.jpg"
        className="rounded-[35%] w-10 h-10"
      />
    </div>
    <div className="relative">
      <div className="bg-indigo-600 absolute right-1 border top-0 h-3 w-3 rounded-full" />
      <img
         src="https://i.ibb.co.com/kVzWMDp8/avatar-6.jpg"
        className="rounded-[35%] w-14 h-14"
      />
    </div>
    <div className="relative">
      <div className="bg-indigo-600 absolute right-1 top-0 border-2 border-white h-4 w-4 rounded-full" />
      <img
         src="https://i.ibb.co.com/9Hmtg3Q1/avatar-5.jpg"
        className="rounded-[35%] w-16 h-16"
      />
    </div>
    <div className="relative">
      <div className="bg-indigo-600 absolute right-2 top-0 border-2 border-white h-4 w-4 rounded-full" />
      <img
         src="https://i.ibb.co.com/mgjtdRn/avatar-4.jpg"
        className="rounded-[35%] w-20 h-20"
      />
    </div>
    <div className="relative">
      <div className="bg-indigo-600 absolute right-2 top-0 border-2 border-white h-4 w-4 rounded-full" />
      <img
         src="https://i.ibb.co.com/yFryjXfB/avatar-3.jpg"
        className="rounded-[35%] w-24 h-24"
      />
    </div>
</div>`;
  return (
    <CardContainer
      title={"Squircle Avatar Dots"}
      description={
        "Avatars can be a dot attached to it. It can be used to indicate the user status. Check out code for detail of usage."
      }
      jsxCodeString={codeString}
    />
  );
};
export default SquircleAvatarDots;
