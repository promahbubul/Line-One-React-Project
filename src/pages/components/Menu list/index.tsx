import {
  MenuListExampleOne,
  MenuListExampleTwo,
  MenuListExampleThree,
  MenuListExampleFour,
  MenuListExampleFive,
  MenuListExampleSix,
  MenuListExampleSeven,
  MenuListExampleEight,
  MenuListExampleNine,
  MenuListExampleTen,
  MenuListExampleEleven,
  MenuListExampleTwelve,
} from "@/components/components/menulist";

const Menulist = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <MenuListExampleOne />
      <MenuListExampleTwo />
      <MenuListExampleThree />
      <MenuListExampleFour />
      <MenuListExampleFive />
      <MenuListExampleSix />
      <MenuListExampleSeven />
      <MenuListExampleEight />
      <MenuListExampleNine />
      <MenuListExampleTen />
      <MenuListExampleEleven />
      <MenuListExampleTwelve />
    </div>
  );
};

export default Menulist;
