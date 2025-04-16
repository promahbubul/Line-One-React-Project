import CardContainer from "@/components/ui/CardContainer";
import { IoIosArrowForward } from "react-icons/io";

const BasicBreadcrumb = () => {
  const codeString = `<div className="">
<ul className='flex'>
    <li className='flex justify-center items-center gap-2 '>
        <a className='text-primary' href="">Home</a>
        <span><IoIosArrowForward /></span>
        
    </li>
    <li className='flex justify-center items-center gap-2 ml-2'>
        <a className='text-primary' href="">Elements</a>
        <span><IoIosArrowForward /></span>
    </li>
    <li className='ml-2'>Breadcrumb</li>
</ul>
</div>`;
  return (
    <>
      <CardContainer
        components={{ IoIosArrowForward }}
        title={"Breadcrumb"}
        description={
          "Breadcrumbs consist of a list of links that help a user visualize a page's location within the hierarchical structure of a website. Check out code for detail of usage."
        }
        jsxCodeString={codeString}
      />
    </>
  );
};
export default BasicBreadcrumb;
