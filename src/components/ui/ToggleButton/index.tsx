const ToggleButton = ({
  showCode,
  setShowCode,
}: {
  showCode: boolean;
  setShowCode: (value: boolean) => void;
}) => {
  return showCode ? (
    <button
      onClick={() => setShowCode(!showCode)}
      className="bg-blue-500 h-5 w-10 rounded-full relative"
    >
      <div className="w-4 rounded-full bg-white absolute right-0.5 top-0.5 h-4"></div>
    </button>
  ) : (
    <button
      onClick={() => setShowCode(!showCode)}
      className="bg-slate-300 h-5 w-10 rounded-full relative"
    >
      <div className="w-4 rounded-full bg-white absolute left-0.5 top-0.5 h-4"></div>
    </button>
  );
};
export default ToggleButton;
