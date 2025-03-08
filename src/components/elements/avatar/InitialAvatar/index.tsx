import CardContainer from "@/components/ui/CardContainer";

const InitialAvatar = () => {
  const codeString = `<div className="flex flex-row items-center gap-3">
  <div className="bg-slate-200 flex items-center justify-center py-3 px-4
    rounded-full w-max text-black font-semibold">JD</div>
  <div className="bg-indigo-600 flex items-center justify-center py-3 px-4
    rounded-full w-max text-white font-semibold">JD</div>
  <div className="bg-pink-600 flex items-center justify-center py-3 px-4
    rounded-full w-max text-white font-semibold">JD</div>
  <div className="bg-sky-500 flex items-center justify-center py-3 px-4
    rounded-full w-max text-white font-semibold">JD</div>
  <div className="bg-emerald-500 flex items-center justify-center py-3 px-4
    rounded-full w-max text-white font-semibold">JD</div>
  <div className="bg-orange-500 flex items-center justify-center py-3 px-4
    rounded-full w-max text-white font-semibold">JD</div>
  <div className="bg-orange-600 flex items-center justify-center py-3 px-4
    rounded-full w-max text-white font-semibold">JD</div>
</div>`;
  return (
    <>
      <CardContainer
        title={"Initial Avatar"}
        description={
          "In the absence of a image, you can use the initial. Initials can be used in various variants. Check out code for detail of usage."
        }
        jsxCodeString={codeString}
      />
    </>
  );
};
export default InitialAvatar;
