import { IconType } from "react-icons";
import { BiCoffeeTogo } from "react-icons/bi";
import {
  RxAccessibility,
  RxCode,
  RxGithubLogo,
  RxShadow,
  RxShare1,
} from "react-icons/rx";

export interface Value {
  title: string;
  description: string;
  icon: IconType;
}

export interface ProjectLink {
  name: string;
  label?: string;
  href?: string;
  desc: string;
  icon: ([...a]: any) => JSX.Element;
  color: string;
  bgColor: string;
  hover: string;
}

export const valuesData: Value[] = [
  {
    title: "Free forever",
    description:
      "Tetra will always be free to use, without any hidden fees or costs. We believe in providing a valuable service to the Discord community, and we don't want anyone to be excluded because of financial barriers.",
    icon: RxAccessibility,
  },
  {
    title: "Open source",
    description:
      "Tetra is open source project, which means that you can access the code and contribute to its development. ",
    icon: RxCode,
  },
  {
    title: "Transparency",
    description:
      "Users are aware of permissions and privilaged which bot has. Bot itself does not store any data.",
    icon: RxShadow,
  },
  {
    title: "Slash commands",
    description:
      "Tetra is built on the latest version of Discord.js, which means that it is reliable, fast, and easy to use. We are constantly updating and improving our code to ensure that our users have access to the best features and functionality.",
    icon: RxShare1,
  },
];

export const linksData: ProjectLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/ike-gg/tetra",
    label: "SOURCE CODE",
    desc: "Check the source code of Tetra and become a contributor!",
    icon: RxGithubLogo,
    color: "#F1F6FB",
    bgColor: "#0E1116",
    hover: "#272B31",
  },
  {
    name: "Buy me a coffee",
    label: "UPCOMING",
    desc: "If you would like to support me, you can do here.",
    icon: BiCoffeeTogo,
    color: "#e0a755",
    bgColor: "#FFEACC",
    hover: "white",
  },
];
