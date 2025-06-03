import LinkItems from "@/components/ui/LinkItem";
import { applicationMoreMenuData, componentsMenuData, dashboardMoreMenuData, elementsMenuData, formMenuData, layoutsMenuData } from "@/constant/moreMenu.constant";
import { useLocation } from "react-router-dom";

const MoreMenu = ({ showMoreMenu }: { showMoreMenu: boolean }) => {
  const { pathname } = useLocation();

  const pathBase = pathname.split("/")[1];
  // console.log(pathBase)
  return (
    <div
      className={`drop-shadow-2xl border-r ease-in-out duration-300 bg-white  border-r-[0.5] w-60  overflow-y-auto px-5 py-10 shadow-red-500 ${
        showMoreMenu
          ? "relative left-0"
          : "overflow-hidden absolute inset-y-0   -left-60"
      }`}
    >
      <h3 className="text-[#555e6d] font-semibold text-lg">Dashboards</h3>
      <div className="">
        {/* <h4 className="text-[#7872eb] mt-5 text-base font-semibold">CRM Analytics</h4> */}
        {/* Dashboard */}
        {pathBase === "dashboards"
          ? dashboardMoreMenuData.map(({ group, menu }) => (
              <div className="border-b last:border-b-0" key={group}>
                {menu.map(({ id, path, title }) => (
                  <LinkItems
                    key={id}
                    path={`/${pathBase}/${path}`}
                    title={title}
                  />
                ))}
              </div>
            ))
          : pathBase === "applications"
          ? applicationMoreMenuData.map(({ group, menu }) => (
              <div className="border-b last:border-b-0" key={group}>
                {menu.map(({ id, path, title }) => (
                  <LinkItems
                    key={id}
                    path={`/${pathBase}/${path}`}
                    title={title}
                  />
                ))}
              </div>
            ))
          : pathBase === "pages-and-layouts"
          ? layoutsMenuData.map(({ group, menu }) => (
              <div className="border-b last:border-b-0" key={group}>
                {menu.map(({ id, path, title }) => (
                  <LinkItems
                    key={id}
                    path={`/${pathBase}/${path}`}
                    title={title}
                  />
                ))}
              </div>
            ))
          : pathBase === "forms"
          ? formMenuData.map(({ group, menu }) => (
              <div className="border-b last:border-b-0" key={group}>
                {menu.map(({ id, path, title }) => (
                  <LinkItems
                    key={id}
                    path={`/${pathBase}/${path}`}
                    title={title}
                  />
                ))}
              </div>
            ))
          : pathBase === "components"
          ? componentsMenuData.map(({ group, menu }) => (
              <div className="border-b last:border-b-0" key={group}>
                {menu.map(({ id, path, title }) => (
                  <LinkItems
                    key={id}
                    path={`/${pathBase}/${path}`}
                    title={title}
                  />
                ))}
              </div>
            ))
          : pathBase === "elements"
          ? elementsMenuData.map(({ group, menu }) => (
              <div className="border-b last:border-b-0" key={group}>
                {menu.map(({ id, to, path, title }) => (
                  <LinkItems
                    key={id}
                    path={to ? to : `/${pathBase}/${path}`}
                    title={title}
                  />
                ))}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};
export default MoreMenu;
