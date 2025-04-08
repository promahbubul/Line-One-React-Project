import CardContainer from "@/components/ui/CardContainer";
import { FaRegHeart } from "react-icons/fa";

const WithIcons = () => {
  const codeString = `<div className="flex flex-wrap gap-3">
    <div className="flex justify-center items-center gap-1 w-24 h-9 rounded-lg bg-[#6C63FF] text-white hover:bg-[#5952d6] active:bg-[#4b46b2]">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
      <span>Like</span>
    </div>

    <div className="flex justify-center items-center gap-1 w-32 h-9 rounded-full bg-[#0070f3] text-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
      <span>Primary</span>
    </div>

    <div className="flex justify-center items-center gap-1 w-28 h-9 rounded-lg bg-[#0ea5e9] text-white">
      <span>Cloud</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
      </svg>
    </div>

    <div className="flex justify-center items-center gap-1 px-2 w-32 h-9 rounded-lg border border-[#facc15] text-[#facc15]">
      <span>Trending</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    </div>

    <div className="flex justify-center items-center gap-1 px-2 w-32 h-9 rounded-full bg-[#e2e8f0] text-[#1e293b]">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      <span>Refresh</span>
    </div>

    <div className="flex justify-center items-center gap-1 px-2 w-32 h-9 rounded-lg border border-[#6C63FF] text-[#6C63FF]">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
      <span>Block</span>
    </div>

    <div className="flex justify-center items-center gap-1 px-2 w-36 h-9 rounded-lg bg-[#facc15] text-white">
      <span>Low Energy</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
      </svg>
    </div>
</div>`;
  return (
    <>
      <CardContainer
        title={"With Icons"}
        description={
          "Buttons can have an icon. Buttons components work well with FontAwesome and Heroicon Icons. Check out code for detail of usage."
        }
        jsxCodeString={codeString}
      />
    </>
  );
};
export default WithIcons;
