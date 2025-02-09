import { MainArea, SideMenu, TopNavigation } from "@/components/layout";


const Layout = () => {
  return (
    <div className="h-screen flex flex-row">
      {/* Left */}
      <SideMenu />
      {/* Right */}
      <section className="border-2 w-full">
        {/* Top Navigation */}
        <TopNavigation />
        {/* Main Area */}
        <MainArea />
      </section>
    </div>
  );
};
export default Layout;
