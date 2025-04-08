import CardContainer from "@/components/ui/CardContainer";

const OnlyIcons = () => {
  const codeString = `<div className="flex flex-wrap gap-3">
    <button className="flex justify-center items-center h-9 w-9 rounded-full bg-[#6C63FF] p-0 text-white hover:bg-[#5952d6] focus:bg-[#5952d6] active:bg-[#4b46b2]">
       <svg
      xmlns="http://www.w3.org/2000/svg"
      class="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
    </button>
    <button className="flex justify-center items-center h-9 w-9 rounded-full bg-[#0070f3] p-0 text-white hover:bg-[#0059c1] focus:bg-[#0059c1] active:bg-[#004ea8]">
     <svg
      xmlns="http://www.w3.org/2000/svg"
      class="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
    </button>
    <button className="flex justify-center items-center h-9 w-9 rounded-full bg-[#e0f2fe] p-0 text-[#0284c7] hover:bg-[#bae6fd] focus:bg-[#bae6fd] active:bg-[#7dd3fc]">
     
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
    </button>
    <button className="flex justify-center items-center h-9 w-9 rounded-lg bg-[#22c55e] p-0 text-white hover:bg-[#16a34a] focus:bg-[#16a34a] active:bg-[#15803d]">
       <svg
      xmlns="http://www.w3.org/2000/svg"
      class="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
      />
    </svg>
    </button>
    <button className="flex justify-center items-center h-9 w-9 rounded-lg border border-[#0070f3] p-0 text-[#0070f3] hover:text-white hover:bg-[#0059c1] focus:bg-[#0059c1] active:bg-[#004ea8]">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      class="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
      />
    </svg>
    </button>
    <button className="flex justify-center items-center h-9 w-9 rounded-lg border border-[#facc15] p-0 text-[#facc15] hover:bg-[#fef9c3] focus:shadow-[0_0_0_2px_#facc15] active:shadow-[0_0_0_2px_#facc15] hover:shadow-lg hover:shadow-[#facc15]">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      class="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
    </button>
    <button className="flex justify-center items-center h-9 w-9 rounded-lg border border-[#ef4444] p-0 text-[#ef4444] hover:bg-[#fee2e2] focus:bg-[#fee2e2] active:bg-[#fecaca]">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      class="size-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
      />
    </svg>
    </button>
    <button className="flex justify-center items-center h-9 w-9 rounded-full bg-[#f3f4f6] p-0 text-[#1e293b] hover:bg-[#e5e7eb] focus:bg-[#e5e7eb] active:bg-[#d1d5db]">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z"></path></svg>
    </button>
    <button className="flex justify-center items-center msk is-hexagon h-9 w-9 rounded-full bg-[#0070f3] p-0 text-white hover:bg-[#0059c1] focus:bg-[#0059c1] active:bg-[#004ea8]">
      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>
    </button>
    <button className="flex justify-center items-center h-9 w-9 rounded-full bg-[#0ea5e9] p-0 text-white hover:bg-[#0284c7] focus:bg-[#0284c7] active:bg-[#0369a1]">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
    </button>
</div>`;
  return (
    <>
      <CardContainer
        title={"Only Icons"}
        description={
          "Buttons can have only icon. Buttons components work well with FontAwesome and Heroicon Icons. Check out code for detail of usage."
        }
        jsxCodeString={codeString}
      />
    </>
  );
};
export default OnlyIcons;
