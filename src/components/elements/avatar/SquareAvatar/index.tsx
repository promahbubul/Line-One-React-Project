import CardContainer from "@/components/ui/CardContainer";

const SquareAvatar = () => {
  const myCodeString = `<div className="flex flex-row items-end gap-3">
  <img
    className="rounded-lg size-8"
    src="https://i.ibb.co.com/ks6wCf73/avatar-1.jpg"
    alt="Avatar"
  />
  <img
    className="rounded-lg size-10"
    src="https://i.ibb.co.com/qYh3q4KJ/avatar-7.jpg"
    alt="Avatar"
  />
  <img
    className="rounded-lg size-12"
    src="https://i.ibb.co.com/kVzWMDp8/avatar-6.jpg"
    alt="Avatar"
  />
  <img
    className="rounded-lg size-14"
    src="https://i.ibb.co.com/9Hmtg3Q1/avatar-5.jpg"
    alt="Avatar"
  />
  <img
    className="rounded-lg size-16"
    src="https://i.ibb.co.com/mgjtdRn/avatar-4.jpg"
    alt="Avatar"
  />
  <img
    className="rounded-lg size-20"
    src="https://i.ibb.co.com/yFryjXfB/avatar-3.jpg"
    alt="Avatar"
  />
</div>`;
  return (
    <CardContainer
      title={"Square Avatar"}
      description={
        "Avatars can have a square shape. To do this, you should use the rounded-lg utility. Check out code for detail of usage."
      }
      jsxCodeString={myCodeString}
    />
  );
};
export default SquareAvatar;
