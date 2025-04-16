import CardContainer from "@/components/ui/CardContainer";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineCalendar } from "react-icons/hi2";
import { MdArrowForwardIos } from "react-icons/md";
import { PiSelectionAll } from "react-icons/pi";

const WithIcon = () => {
  const codeString = `  <ul className="flex items-center gap-2">
            <div className="text-blue-600">
              <span>
                <AiOutlineHome />
              </span>
            </div>
            <span>
              <MdArrowForwardIos />
            </span>

            <div className="flex items-center gap-1 text-blue-600">
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
          </ul>`;
  return (
    <>
      <CardContainer
        title={"With Icon"}
        components={{
          AiOutlineHome,
          HiOutlineCalendar,
          MdArrowForwardIos,
          PiSelectionAll,
        }}
        description={
          "Breadcrumb can have an icon. Check out code for detail of usage"
        }
        jsxCodeString={codeString}
      />
    </>
  );
};
export default WithIcon;
