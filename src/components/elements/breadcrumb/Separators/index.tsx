import CardContainer from "@/components/ui/CardContainer";
import { LuDot } from "react-icons/lu";
import { TbArrowsRight } from "react-icons/tb";
import { TiArrowRight } from "react-icons/ti";

const Separators = () => {
  const codeString = `<div className="">
  <div>
    <ul className="flex items-center gap-2">
      <a href="" className="text-blue-600">Home</a>
      <span><TbArrowsRight /></span>
      <a href="" className="text-blue-600">Elements</a>
      <span><TbArrowsRight /></span>
      <li>Breadcrumb</li>
    </ul>
  </div>

  <div>
    <ul className="flex items-center gap-2">
      <a href="" className="text-blue-600">Home</a>
      <span><LuDot /></span>
      <a href="" className="text-blue-600">Elements</a>
      <span><LuDot /></span>
      <li>Breadcrumb</li>
    </ul>
  </div>

  <div>
    <ul className="flex items-center gap-3.5">
      <a href="" className="text-blue-600">Home</a>
      <span>|</span>
      <a href="" className="text-blue-600">Elements</a>
      <span>|</span>
      <li>Breadcrumb</li>
    </ul>
  </div>

  <div>
    <ul className="flex items-center gap-3">
      <a href="" className="text-blue-600">Home</a>
      <span>/</span>
      <a href="" className="text-blue-600">Elements</a>
      <span>/</span>
      <li>Breadcrumb</li>
    </ul>
  </div>

  <div>
    <ul className="flex items-center gap-2">
      <a href="" className="text-blue-600">Home</a>
      <span><TiArrowRight /></span>
      <a href="" className="text-blue-600">Elements</a>
      <span><TiArrowRight /></span>
      <li>Breadcrumb</li>
    </ul>
  </div>
</div>
`;
  return (
    <>
      <CardContainer
        components={{ LuDot, TbArrowsRight, TiArrowRight }}
        title={"Separators"}
        description={
          "Separators can be svg or any HTML chars. Check out code for detail of usage."
        }
        jsxCodeString={codeString}
      />
    </>
  );
};
export default Separators;
