import { FiPlusCircle, FiSave, FiFolder } from "react-icons/fi";

interface NavbarTabType {
  label: string;
  tab: string;
  icon: React.ReactNode;
  active: boolean;
}
const navbarTabs: NavbarTabType[] = [
  {
    label: "Generate",
    tab: "generate",
    icon: <FiPlusCircle />,
    active: true,
  },
  {
    label: "Saved",
    tab: "saved",
    icon: <FiSave />,
    active: false,
  },
];

export default navbarTabs;
