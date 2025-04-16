import CardContainer from "@/components/ui/CardContainer";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineCalendar } from "react-icons/hi2";
import { MdArrowForwardIos } from "react-icons/md";
import { PiSelectionAll } from "react-icons/pi";

const BorderedBreadcrumb = () => {
  const codeString = `<ul className="flex items-center gap-2 text-slate-400 border-slate-500">
  <div className="text-blue-600 border border-blue-600 p-1 rounded-md">
    <span>
      <AiOutlineHome />
    </span>
  </div>
  <span>
    <MdArrowForwardIos />
  </span>
  <div className="flex items-center gap-1 text-blue-600 border border-blue-600 px-2 rounded-md">
    <span>
      <PiSelectionAll />
    </span>
    <li>Elements</li>
  </div>
  <span>
    <MdArrowForwardIos />
  </span>
  <div className="flex items-center gap-1">
    <span className="text-slate-400">
      <HiOutlineCalendar />
    </span>
    <li>Calendar</li>
  </div>
</ul>
`;
  return (
    <>
      <CardContainer
        components={{
          AiOutlineHome,    
          HiOutlineCalendar,
          MdArrowForwardIos,
          PiSelectionAll,
        }}
        title={"Bordered Breadcrumb"}
        description={
          "Breadcrumb can be bordered. Check out code for detail of usage."
        }
        jsxCodeString={codeString}
      />
    </>
  );
};
export default BorderedBreadcrumb;
