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
      "Turn heads with QR codes that scream Im unique! Use our customization options to create QR codes that are as colorful and quirky as you are.",
  },
  {
    icon: <AiOutlineEye size={24} />,
    content:
      "Change the destination URL anytime, anywhere, so your code is always up-to-date and ready to take your customers where you want them to go!",
  },
  {
    icon: <FiLink2 size={24} />,
    content:
      "You've got the QR codes, but do you know what they're up to? Our analytics feature gives you insights to optimize your marketing strategy and dominate the competition!",
  },
];
export default cards;
