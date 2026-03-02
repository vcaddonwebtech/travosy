import { Children } from "react";

const routes = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Tour",
    Children: [
      { label: "Tour 1", path: "tour/1" },
      { label: "Tour 2", path: "tour/2" },
      { label: "Tour 3", path: "tour/3" },
    ],
  },

  {
    label: "About Us",
    path: "/about",
  },

  {
    label: "Contact",
    path: "/contact",
  },
];
export default routes