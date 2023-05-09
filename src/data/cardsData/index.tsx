import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FiLink2 } from "react-icons/fi";
import { MdQrCodeScanner } from "react-icons/md";
const cards: {
  icon: React.ReactNode;
  content: string;
}[] = [
    {
      icon: <MdQrCodeScanner size={24} />,
      content:
        "A user needs a quick and efficient way to share their buisness/youtube/ig link to potential customers.",
    },
    {
      icon: <AiOutlineEye size={24} />,
      content:
        "User needs a good and reliable QR code to keep track of all his buisness activities around the world.",
    },
    {
      icon: <FiLink2 size={24} />,
      content:
        "User needs a single QR code that will work for many such things as campaigns and ads",
    },
  ];
export default cards;
