import HomeIcon from "../public/icons/home.svg";
import BookIcon from "../public/icons/book.svg";
import CloseIcon from "../public/icons/close.svg";
import GearIcon from "../public/icons/gear.svg";
import CodeIcon from "../public/icons/code.svg";
import PhoneIcon from "../public/icons/phone.svg";
import SignOutIcon from "../public/icons/sign-out.svg";
import CloudIcon from "../public/icons/cloud.svg";
import ChevronDownIcon from "../public/icons/chevron-down.svg";

export const lists = [
  {
    title: "Repositories",
    icon: (
      <img
        src={HomeIcon}
        alt="Home"
        width={20}
        height={20}
        className="text-[#414651]"
      />
    ),
  },
  {
    title: "AI Code Review",
    icon: (
      <img
        src={CodeIcon}
        alt="Book"
        width={20}
        height={20}
        className="text-[#414651]"
      />
    ),
  },
  {
    title: "Cloud Security",
    icon: (
      <img
        src={CloudIcon}
        alt="Cloud"
        width={20}
        height={20}
        className="text-[#414651]"
      />
    ),
  },
  {
    title: "How to Use",
    icon: (
      <img
        src={BookIcon}
        alt="Chevron Down"
        width={18}
        height={18}
        className="text-[#414651]"
      />
    ),
  },
  {
    title: "Settings",
    icon: (
      <img
        src={GearIcon}
        alt="Gear"
        width={20}
        height={20}
        className="text-[#414651]"
      />
    ),
  },
  {
    title: "Support",
    icon: (
      <img
        src={PhoneIcon}
        alt="Phone"
        width={20}
        height={20}
        className="text-[#414651]"
      />
    ),
  },
  {
    title: "Logout",
    icon: (
      <img
        src={SignOutIcon}
        alt="Sign Out"
        width={20}
        height={20}
        className="text-[#414651]"
      />
    ),
  },
];

export const repos = [
  {
    name: "design-system",
    visiblity: "Public",
    languageUsed: "React",
    imageLink: "",
    size: "7320",
    lastUpdatedDate: "1",
  },
  {
    name: "codeant-ci-app",
    visiblity: "Private",
    languageUsed: "Javascript",
    imageLink: "",
    size: "5871",
    lastUpdatedDate: "2",
  },
  {
    name: "analytics-dashboard",
    visiblity: "Private",
    languageUsed: "Python",
    imageLink: "",
    size: "4521",
    lastUpdatedDate: "5",
  },
  {
    name: "mobile-app",
    visiblity: "Public",
    languageUsed: "Swift",
    imageLink: "",
    size: "3096",
    lastUpdatedDate: "3",
  },
  {
    name: "e-commerce-platform",
    visiblity: "Private",
    languageUsed: "Java",
    imageLink: "",
    size: "6210",
    lastUpdatedDate: "6",
  },
  {
    name: "blog-website",
    visiblity: "Public",
    languageUsed: "HTML/CSS",
    imageLink: "",
    size: "6210",
    lastUpdatedDate: "6",
  },
  {
    name: "social-network",
    visiblity: "Private",
    languageUsed: "PHP",
    imageLink: "",
    size: "5432",
    lastUpdatedDate: "7",
  },
];
