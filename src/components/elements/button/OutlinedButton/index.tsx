import CardContainer from "@/components/ui/CardContainer"

const OutlinedButton = () => {
  const codeString = `<div className='flex flex-wrap gap-3'>
    <button className='py-1.5 px-5 bg-gray-100 rounded-md font-medium text-slate-800 hover:text-black hover:bg-gray-200 focus:bg-gray-300 focus:text-white active:bg-gray-300 border border-slate-300'>
        Default
    </button>
    <button className='py-1.5 px-5 bg-white rounded-md font-medium text-blue-500 hover:text-white hover:bg-blue-600 focus:bg-blue-700 focus:text-white active:bg-blue-700 border border-blue-500'>
        Primary
    </button>
    <button className='py-1.5 px-5 bg-white rounded-md font-medium text-purple-500 hover:text-white hover:bg-purple-600 focus:bg-purple-700 focus:text-white active:bg-purple-700 border border-purple-500'>
        Secondary
    </button>
    <button className='py-1.5 px-5 bg-white rounded-md font-medium text-sky-500 hover:text-white hover:bg-sky-600 focus:bg-sky-700 focus:text-white active:bg-sky-700 border border-sky-500'>
        Info
    </button>
    <button className='py-1.5 px-5 bg-white rounded-md font-medium text-green-500 hover:text-white hover:bg-green-600 focus:bg-green-700 focus:text-white active:bg-green-700 border border-green-500'>
        Success
    </button>
    <button className='py-1.5 px-5 bg-white rounded-md font-medium text-yellow-500 hover:text-white hover:bg-yellow-600 focus:bg-yellow-700 focus:text-white active:bg-yellow-700 border border-yellow-500'>
        Warning
    </button>
    <button className='py-1.5 px-5 bg-white rounded-md font-medium text-red-500 hover:text-white hover:bg-red-600 focus:bg-red-700 focus:text-white active:bg-red-700 border border-red-500'>
        Error
    </button>
</div>`;
  return (
    <CardContainer
      title={"Outline Button"}
      description={
        "Buttons can be outlied. Check out code for detail of usage."
      }
      jsxCodeString={codeString}
    />
  );
}
export default OutlinedButton