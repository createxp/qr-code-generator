import { useRouter } from "next/router";
import React from "react";
import { useScreen } from "../../../contexts";
import { navbarTabs } from "../../../data";
import NavbarActions from "../NavbarActions";

const Navbar = () => {
  const router = useRouter();
  const { selectedTab } = useScreen();

  return (
    <div className="bg-neutral-100 fixed top-0 z-50 lg:px-40 px-4 w-full shadow">
      <div className="w-full flex justify-center items-center py-5 select-none relative">
        {/* Logo */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex gap-2 justify-between items-center">
          <img
            src={"/icon.png"}
            alt="createxp"
            className="object-cover rounded-full"
            width={40}
          />
          <span className="font-krona hidden md:flex">QR Code Generator</span>
        </div>
        {/* Tabs */}
        <div className="flex gap-1 px-1 py-2 border border-neutral-800 w-fit rounded-full relative transition-all">
          {navbarTabs.map((tab, index) => (
            <div
              key={index}
              className={[
                "flex gap-2 items-center justify-center cursor-pointer whitespace-nowrap text-sm w-[100px] z-10 ",
                selectedTab === index ? "text-white" : "text-neutral-800",
              ].join(" ")}
              onClick={() => {
                if (tab.active) router.push(`/app?tab=${tab.tab}`);
                router.push(`/app?tab=${tab.tab}`);
              }}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </div>
          ))}
        </div>
        <div>
          <NavbarActions />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
