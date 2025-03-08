import {
  BasicAlert,
  BorderedAlert,
  OutlinedAlert,
  SoftAlert,
} from "@/components/elements/alert";

const Alert = () => {
  return (
    <div className=" grid grid-cols-2 gap-5">
      <BasicAlert />
      <OutlinedAlert />
      <SoftAlert />
      <BorderedAlert />
    </div>
  );
};

export default Alert;
