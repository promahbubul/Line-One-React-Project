import CardContainer from "@/components/ui/CardContainer";

const BorderedInitialAvatar = () => {
  const codeString = ` <div className="flex flex-row items-center gap-3">
    <div className="text-indigo-600 border border-indigo-600 flex items-center justify-center py-3 px-4 rounded-full w-max bg-indigo-100 font-semibold">
      JD
    </div>
    <div className="text-pink-600 border border-pink-600 flex items-center justify-center py-3 px-4 rounded-full w-max bg-pink-100 font-semibold">
      JD
    </div>
    <div className="text-sky-500 border border-sky-500 flex items-center justify-center py-3 px-4 rounded-full w-max bg-sky-100 font-semibold">
      JD
    </div>
    <div className="text-emerald-500 border border-emerald-500 flex items-center justify-center py-3 px-4 rounded-full w-max bg-emerald-100 font-semibold">
      JD
    </div>
    <div className="text-orange-500 border border-orange-500 flex items-center justify-center py-3 px-4 rounded-full w-max bg-amber-100 font-semibold">
      JD
    </div>
    <div className="text-orange-600 border border-orange-600 flex items-center justify-center py-3 px-4 rounded-full w-max bg-orange-100 font-semibold">
      JD
    </div>
</div>`;
  return (
    <CardContainer
      title={"Bordered Initial Avatar"}
      description={
        "Initial avatars can have a border. Check out code for detail of usage."
      }
      jsxCodeString={codeString}
    />
  );
};
export default BorderedInitialAvatar;
