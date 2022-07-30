import { MdOutlineMailOutline, MdShuffle } from "react-icons/md";
import { RiHome4Line } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

export const NavbarIcons = [
  {
    id: 1,
    icon: <RiHome4Line />,
    path: "/",
  },
  { id: 2, icon: <MdOutlineMailOutline /> },
  {
    id: 3,
    icon: <MdShuffle />,
  },
  {
    id: 4,
    icon: <FaBars />,
  },
];

export const NavbarLinks = [
  { id: 1, path: "/services", label: "Services" },
  { id: 2, path: "/products", label: "Product" },
  { id: 3, path: "", label: "Technology" },
  { id: 4, path: "", label: "About" },
  { id: 5, path: "", label: "Client" },
  { id: 6, path: "", label: "Patner" },
];
