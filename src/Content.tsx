import { FaBook } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { IoIosCloudOutline } from "react-icons/io";
import { IoSettingsOutline, IoCallOutline } from "react-icons/io5";
import { LuCodeXml, LuLogOut } from "react-icons/lu";

export const lists = [
  {
    title: "Repositories",
    icon: <HiOutlineHome size={20} className="text-[#414651]" />,
  },
  {
    title: "AI Code Review",
    icon: <LuCodeXml size={20} className="text-[#414651]" />,
  },
  {
    title: "Cloud Security",
    icon: <IoIosCloudOutline size={20} className="text-[#414651]" />,
  },
  {
    title: "How to Use",
    icon: <FaBook size={20} className="text-[#414651]" />,
  },
  {
    title: "Settings",
    icon: <IoSettingsOutline size={20} className="text-[#414651]" />,
  },
  {
    title: "Support",
    icon: <IoCallOutline size={20} className="text-[#414651]" />,
  },
  {
    title: "Logout",
    icon: <LuLogOut size={20} className="text-[#414651]" />,
  },
];
