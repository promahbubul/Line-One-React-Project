import CardContainer from "@/components/ui/CardContainer"

const FlatButton = () => {
  const codeString = `<div className="flex flex-wrap gap-3" title="Flat Button" description="Buttons can be flat. Check out code for detail of usage.">
    <button className="py-1.5 px-5 rounded-md font-medium text-primary hover:bg-primary-soft-hover focus:bg-primary-soft-hover active:bg-primary-soft-active">
        Primary
    </button>
    <button className="py-1.5 px-5 rounded-md font-medium text-secondary hover:bg-secondary-soft-hover focus:bg-secondary-soft-hover active:bg-secondary-soft-active">
        Secondary
    </button>
    <button className="py-1.5 px-5 rounded-md font-medium text-info hover:bg-info-soft-hover focus:bg-info-soft-hover active:bg-info-soft-active">
        Info
    </button>
    <button className="py-1.5 px-5 rounded-md font-medium text-success hover:bg-success-soft-hover focus:bg-success-soft-hover active:bg-success-soft-active">
        Success
    </button>
    <button className="py-1.5 px-5 rounded-md font-medium text-warning hover:bg-warning-soft-hover focus:bg-warning-soft-hover active:bg-warning-soft-active">
        Warning
    </button>
    <button className="py-1.5 px-5 rounded-md font-medium text-error hover:bg-error-soft-active focus:bg-error-soft-active active:bg-error-soft-active">
        Error
    </button>
</div>`;
  return (
    <CardContainer
      title="Flat Button"
      description="Buttons can be flat. Check out code for detail of usage."
      jsxCodeString={codeString}
    />
  );
}
export default FlatButton