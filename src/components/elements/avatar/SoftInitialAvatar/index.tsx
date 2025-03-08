import CardContainer from "@/components/ui/CardContainer";

const SoftInitialAvatar = () => {
   const codeString = `<div className="flex flex-row items-center gap-3">
  <div className="text-indigo-600 flex items-center justify-center py-3 px-4
    rounded-full w-max bg-indigo-100 font-semibold">JD</div>
  <div className="text-pink-600 flex items-center justify-center py-3 px-4
    rounded-full w-max bg-pink-100 font-semibold">JD</div>
  <div className="text-sky-500 flex items-center justify-center py-3 px-4
    rounded-full w-max bg-sky-100 font-semibold">JD</div>
  <div className="text-emerald-500 flex items-center justify-center py-3 px-4
    rounded-full w-max bg-emerald-100 font-semibold">JD</div>
  <div className="text-orange-500 flex items-center justify-center py-3 px-4
    rounded-full w-max bg-amber-100 font-semibold">JD</div>
  <div className="text-orange-600 flex items-center justify-center py-3 px-4
    rounded-full w-max bg-orange-100 font-semibold">JD</div>
</div>

`;
  return (
      <CardContainer title={"Soft Initial Avatar"} description={"Initial avatars can have a soft colors. To do this, you should use some opacity. Check out code for detail of usage."} jsxCodeString={codeString} />
  )
}
export default SoftInitialAvatar