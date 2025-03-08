import CardContainer from "@/components/ui/CardContainer";

const SquareAvatarGroup = () => {
  const codeString = ` <div className="flex flex-row -space-x-4 ">
    <img
        src="https://i.ibb.co.com/ks6wCf73/avatar-1.jpg"
      alt=""
      className="inline-block h-10 w-10 rounded-[40%] border-4 border-white"
    />
    <img
        src="https://i.ibb.co.com/qYh3q4KJ/avatar-7.jpg"
      alt=""
      className="inline-block h-10 w-10 rounded-[40%] border-4 border-white"
    />
    <img
        src="https://i.ibb.co.com/kVzWMDp8/avatar-6.jpg"
      alt=""
      className="inline-block h-10 w-10 rounded-[40%] border-4 border-white"
    />
    <img
        src="https://i.ibb.co.com/9Hmtg3Q1/avatar-5.jpg"
      alt=""
      className="inline-block h-10 w-10 rounded-[40%] border-4 border-white"
    />
    <img
        src="https://i.ibb.co.com/mgjtdRn/avatar-4.jpg"
      alt=""
      className="inline-block h-10 w-10 rounded-[40%] border-4 border-white"
    />
</div>`;
  return (
    <CardContainer
      title={"Square Avatar Group"}
      description={
        "The Avatar group renders its children as a stack. Check out code for detail of usage."
      }
      jsxCodeString={codeString}
    />
  );
};
export default SquareAvatarGroup;
