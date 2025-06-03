import {
  BasicNotification,
  NotificationVariants,
  NotificationPosition,
  NotificationDuration,
  CustomHTMLContent,
} from "@/components/components/notification";

const Notification = () => {
  return (
    <div className="space-y-5">
      <BasicNotification />
      <NotificationVariants />
      <NotificationPosition />
      <NotificationDuration />
      <CustomHTMLContent />
    </div>
  );
};

export default Notification;
