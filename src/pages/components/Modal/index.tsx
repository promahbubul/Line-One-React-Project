import {
  BasicModal,
  BackdropBlur,
  ModelTransition,
  ModelScale,
} from "@/components/components/modal";

const Modal = () => {
  return (
    <div className="space-y-5">
      <BasicModal />
      <BackdropBlur />
      <ModelTransition />
      <ModelScale />
    </div>
  );
};

export default Modal;
