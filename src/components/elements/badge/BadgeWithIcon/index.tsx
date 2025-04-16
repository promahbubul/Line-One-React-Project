import CardContainer from "@/components/ui/CardContainer"

const BadgeWithIcon = () => {
  const codeString = `<div className="flex flex-wrap gap-3">
  <button className="py-1 px-3 flex flex-row items-center gap-1 text-[#1e293b] text-sm bg-[#f1f5f9] rounded-md font-medium">
  <svg
      xmlns="http://www.w3.org/2000/svg"
      class="size-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
   <span className="">Default</span>
  </button>
  <button className="py-1 px-3 flex flex-row items-center gap-1 text-white text-sm bg-[#3b82f6] rounded-md font-medium">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="size-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      ></path>
    </svg>
    <span className="">Primary</span>
  </button>
  <button className="py-1 px-3 flex flex-row items-center gap-1 text-white text-sm bg-[#6366f1] rounded-md font-medium">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="size-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <span className="">Secondary</span>
  </button>
  <button className="py-1 px-3 flex flex-row items-center gap-1 text-white text-sm bg-[#0ea5e9] rounded-md font-medium">
     <svg
      xmlns="http://www.w3.org/2000/svg"
      class="size-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
      ></path>
    </svg>
    <span className="">Info</span>
  </button>
  <button className="py-1 px-3 flex flex-row items-center gap-1 text-white text-sm bg-[#22c55e] rounded-md font-medium">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      class="size-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <span className="">Success</span>
  </button>
  <button className="py-1 px-3 flex flex-row items-center gap-1 text-white text-sm bg-[#eab308] rounded-md font-medium">
   <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
        clip-rule="evenodd"
      />
    </svg>
    <span className="">Warning</span>
  </button>
  <button className="py-1 px-3 flex flex-row items-center gap-1 text-white text-sm bg-[#ef4444] rounded-md font-medium">
   <svg
      xmlns="http://www.w3.org/2000/svg"
      class="size-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
    <span className="">Remove</span>
  </button>
</div>`;
  return (
    <CardContainer
      title={"Badge With Icon"}
      description={
        "Badges can have an icon. Badges components work well with FontAwesome and Heroicon Icons. Check out code for detail of usage."
      }
      jsxCodeString={codeString}
    />
  );
}
export default BadgeWithIcon