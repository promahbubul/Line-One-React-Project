import CardContainer from "@/components/ui/CardContainer";

const BasicTooltip = () => {
  return (
    <div className="">
      <CardContainer
        title={"Basic Tooltip"}
        description={
          "A tooltip is often used to specify extra information about something when the user moves the mouse pointer over an element. Check out code for detail of usage."
        }
        jsxCodeString={""}
      />
      <div className="">
        <button
          x-tooltip="'Default'"
          className="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        >
          Default
        </button>
        <button className="btn bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80">
          Light
        </button>
        <button className="btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
          Primary
        </button>
        <button className="btn bg-secondary font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90">
          Secondary
        </button>
        <button className="btn bg-info font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90">
          Info
        </button>
        <button className="btn bg-success font-medium text-white hover:bg-success-focus focus:bg-success-focus active:bg-success-focus/90">
          Success
        </button>
        <button className="btn bg-warning font-medium text-white hover:bg-warning-focus focus:bg-warning-focus active:bg-warning-focus/90">
          Warning
        </button>
        <button className="btn bg-error font-medium text-white hover:bg-error-focus focus:bg-error-focus active:bg-error-focus/90">
          Error
        </button>
      </div>
    </div>
  );
};
export default BasicTooltip;
