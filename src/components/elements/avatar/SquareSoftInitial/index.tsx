import CardContainer from "@/components/ui/CardContainer";

const SquareSoftInitial = () => {
  const codeString = `<div className="flex flex-row items-center gap-3">
    <div className="text-indigo-600  flex items-center justify-center py-3 px-4 rounded-lg w-max bg-indigo-100 font-semibold">
      JD
    </div>
    <div className="text-pink-600  flex items-center justify-center py-3 px-4 rounded-lg w-max bg-pink-100 font-semibold">
      JD
    </div>
    <div className="text-sky-500  flex items-center justify-center py-3 px-4 rounded-lg w-max bg-sky-100 font-semibold">
      JD
    </div>
    <div className="text-emerald-500  flex items-center justify-center py-3 px-4 rounded-lg w-max bg-emerald-100 font-semibold">
      JD
    </div>
    <div className="text-orange-500  flex items-center justify-center py-3 px-4 rounded-lg w-max bg-amber-100 font-semibold">
      JD
    </div>
    <div className="text-orange-600  flex items-center justify-center py-3 px-4 rounded-lg w-max bg-orange-100 font-semibold">
      JD
    </div>
</div>`;
  return (
    <div>
      <CardContainer
        title={"Square Soft Initial"}
        description={
          "Initial avatars can have a soft colors and square shape. To do this, you should use some opacity and border-radius utility. Check out code for detail of usage."
        }
        jsxCodeString={codeString}
      />
    </div>
  );
};
export default SquareSoftInitial;
