import HomeIcon from "./assets/icons/home.svg";
import BookIcon from "./assets/icons/book.svg";
import GearIcon from "./assets/icons/gear.svg";
import CodeIcon from "./assets/icons/code.svg";
import PhoneIcon from "./assets/icons/phone.svg";
import SignOutIcon from "./assets/icons/sign-out.svg";
import CloudIcon from "./assets/icons/cloud.svg";

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
    size: "7320",
    lastUpdatedDate: "1",
  },
  {
    name: "codeant-ci-app",
    visiblity: "Private",
    languageUsed: "Javascript",
    size: "5871",
    lastUpdatedDate: "2",
  },
  {
    name: "analytics-dashboard",
    visiblity: "Private",
    languageUsed: "Python",
    size: "4521",
    lastUpdatedDate: "5",
  },
  {
    name: "mobile-app",
    visiblity: "Public",
    languageUsed: "Swift",
    size: "3096",
    lastUpdatedDate: "3",
  },
  {
    name: "e-commerce-platform",
    visiblity: "Private",
    languageUsed: "Java",
    size: "6210",
    lastUpdatedDate: "6",
  },
  {
    name: "blog-website",
    visiblity: "Public",
    languageUsed: "HTML/CSS",
    size: "6210",
    lastUpdatedDate: "6",
  },
  {
    name: "social-network",
    visiblity: "Private",
    languageUsed: "PHP",
    size: "5432",
    lastUpdatedDate: "7",
  },
];
