import CardContainer from "@/components/ui/CardContainer"

const SoftColorButton = () => {
  const codeString = `<div className='flex flex-wrap gap-3'>
    <button className='py-1.5 px-5 bg-purple-100 rounded-md font-medium text-purple-600 hover:bg-purple-200 focus:bg-purple-300 active:bg-purple-300'>
        Secondary
    </button>
    <button className='py-1.5 px-5 bg-sky-100 rounded-md font-medium text-sky-600 hover:bg-sky-200 focus:bg-sky-300 active:bg-sky-300'>
        Info
    </button>
    <button className='py-1.5 px-5 bg-green-100 rounded-md font-medium text-green-600 hover:bg-green-200 focus:bg-green-300 active:bg-green-300'>
        Success
    </button>
    <button className='py-1.5 px-5 bg-yellow-100 rounded-md font-medium text-yellow-600 hover:bg-yellow-200 focus:bg-yellow-300 active:bg-yellow-300'>
        Warning
    </button>
    <button className='py-1.5 px-5 bg-red-100 rounded-md font-medium text-red-600 hover:bg-red-200 focus:bg-red-300 active:bg-red-300'>
        Error
    </button>
</div>`;
  return (
   <CardContainer title={"Soft Color Button"} description={"Buttons can have a soft colors. To do this, you should use some opacity. Check out code for detail of usage."} jsxCodeString={codeString} />
  )
}
export default SoftColorButton