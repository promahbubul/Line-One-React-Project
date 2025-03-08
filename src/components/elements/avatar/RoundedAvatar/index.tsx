import CardContainer from "@/components/ui/CardContainer";

const RoundeAvatar = () => {
  const myCodeString = `<div className="flex flex-row items-end gap-3">
  <img
    className="rounded-full size-8"
    src="https://i.ibb.co.com/ks6wCf73/avatar-1.jpg"
    alt="Avatar"
  />
  <img
    className="rounded-full size-10"
    src="https://i.ibb.co.com/qYh3q4KJ/avatar-7.jpg"
    alt="Avatar"
  />
  <img
    className="rounded-full size-12"
    src="https://i.ibb.co.com/kVzWMDp8/avatar-6.jpg"
    alt="Avatar"
  />
  <img
    className="rounded-full size-14"
    src="https://i.ibb.co.com/9Hmtg3Q1/avatar-5.jpg"
    alt="Avatar"
  />
  <img
    className="rounded-full size-16"
    src="https://i.ibb.co.com/mgjtdRn/avatar-4.jpg"
    alt="Avatar"
  />
  <img
    className="rounded-full size-20"
    src="https://i.ibb.co.com/yFryjXfB/avatar-3.jpg"
    alt="Avatar"
  />
</div>`;

  return (
    <CardContainer
      title={"Rounded Avatar"}
      description={
        "The Avatar component creates a scalable, colorable element that can have text, icon or image within its shape. Check out code for detail of usage."
      }
      jsxCodeString={myCodeString}
    />
  );
};

export default RoundeAvatar;
