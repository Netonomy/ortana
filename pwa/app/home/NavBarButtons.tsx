"use client";

import React, { useEffect, useState } from "react";
import NavBarButton from "./NavBarButton";
import { BotIcon, DollarSignIcon, Folder, HomeIcon } from "lucide-react";

function NavBarButtons({ collapsed }: { collapsed: boolean }) {
  // Initialize state for selected button
  // Default value is the third segment of the URL path or "storage" if it doesn't exist
  const [selectedBtn, setSelectedBtn] = useState(
    window.location.pathname.split("/")[2] || "storage"
  );

  useEffect(() => {
    const handlePathChange = () => {
      // Logic to handle URL path change
      setSelectedBtn(window.location.pathname.split("/")[2] || "storage");
    };

    // Add event listener for 'popstate' event
    window.addEventListener("popstate", handlePathChange);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("popstate", handlePathChange);
    };
  }, []);

  return (
    <div className="w-full flex flex-1 items-center justify-center gap-4 p-4 md:flex-col md:justify-start ">
      {/* <NavBarButton
        selectedBtn={selectedBtn}
        path="/home"
        icon={<HomeIcon className="text-inherit" />}
        setSelectedBtn={setSelectedBtn}
        collapsed={collapsed}
        title="Home"
      /> */}

      <NavBarButton
        selectedBtn={selectedBtn}
        path="/home/storage"
        icon={<Folder className="text-inherit" />}
        setSelectedBtn={setSelectedBtn}
        collapsed={collapsed}
        title="Storage"
      />

      {/* <NavBarButton
        selectedBtn={selectedBtn}
        path="/home/finances"
        icon={<DollarSignIcon className="text-inherit" />}
        setSelectedBtn={setSelectedBtn}
        collapsed={collapsed}
        title="Finances"
      /> */}

      <NavBarButton
        selectedBtn={selectedBtn}
        path="/agent"
        icon={<BotIcon className="text-inherit" />}
        setSelectedBtn={setSelectedBtn}
        collapsed={collapsed}
        title="AI Chat"
      />
    </div>
  );
}

export default NavBarButtons;
