import { FiPlusCircle, FiSave, FiFolder } from "react-icons/fi";

interface NavbarTabType {
  label: string;
  tab: string;
  icon: React.ReactNode;
  active: boolean;
}
const navbarTabs: NavbarTabType[] = [
  {
    label: "Saved",
    tab: "saved",
    icon: <FiSave />,
    active: false,
  },
  {
    label: "Generate",
    tab: "generate",
    icon: <FiPlusCircle />,
    active: true,
  },
];

export default navbarTabs;
