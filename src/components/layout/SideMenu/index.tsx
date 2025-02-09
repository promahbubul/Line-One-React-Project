import homeIcon from '../../../assets/icons/home.svg'

const SideMenu = () => {
  return (
    <div className="border-r-[#e9eef5] bg-white  w-[79px]">
      <div className="">
        <img src="https://lineone.piniastudio.com/images/app-logo.svg" alt="" />
      </div>
      <img src={homeIcon} alt="" className="size-10" />
    </div>
  );
}
export default SideMenu