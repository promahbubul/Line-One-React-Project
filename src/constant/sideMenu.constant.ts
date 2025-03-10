import {
  bagIcon,
  homeIcon,
  squreShapeIcon,
  componentsIcon,
  elementsIcon,
  settingsIcon,
  formIcon,
} from "@/assets/icons";

const sideMenuData = [
  {
    id: 1,
    icon: homeIcon,
    title: "Dashboards",
    tooltip: "dashboards",
    path: "/dashboards",
  },
  {
    id: 2,
    icon: bagIcon,
    title: "Applications",
    tooltip: "applications",
    path: "/applications",
  },
  {
    id: 3,
    icon: squreShapeIcon,
    title: "Pages and Layouts",
    tooltip: "pages_and_layouts",
    path: "/pages-and-layouts",
  },
  {
    id: 4,
    icon: formIcon,
    title: "Forms",
    tooltip: "forms",
    path: "/forms",
  },
  {
    id: 5,
    icon: componentsIcon,
    title: "Components",
    tooltip: "components",
    path: "/components",
  },
  {
    id: 6,
    icon: elementsIcon,
    title: "Elements",
    tooltip: "elements",
    path: "/elements",
  },
  {
    id: 7,
    icon: settingsIcon,
    title: "Settings",
    tooltip: "settings",
    path: "/settings",
  },
];

export { sideMenuData };
