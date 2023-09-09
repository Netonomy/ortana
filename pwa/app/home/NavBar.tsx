"use client";
import AvatarProfile from "@/components/AvatarProfile";
import React, { useState } from "react";
import NavBarButtons from "./NavBarButtons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { userDetailsAtom } from "@/state/user/userDetails";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import KeyLogo from "@/components/KeyLogo";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import useProfile from "@/hooks/useProfile";
import PortalTextImage from "@/components/PortalTextImage";

function NavBar() {
  const [, setUserDetails] = useAtom(userDetailsAtom);
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);
  const { profile } = useProfile();

  return (
    <div
      className={`h-16 z-50 bg-white dark:bg-black border-[1px] flex absolute bottom-4 min-w-[100px] rounded-xl md:flex-col md:left-4 md:top-4 md:bottom-4 md:right-auto md:w-[88px] md:h-auto transition-all ease-in-out ${
        collapsed ? "min-w-[88px]" : "min-w-[220px]"
      }`}
      onMouseOver={() => {
        if (window.innerWidth >= 768) {
          setCollapsed(false);
        }
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 768) {
          setCollapsed(true);
        }
      }}
    >
      <div className="hidden md:flex w-full justify-center mt-4 border-b-2 pb-4 gap-2">
        {collapsed ? (
          <KeyLogo height={40} width={40} />
        ) : (
          <PortalTextImage height={60} width={140} />
        )}
      </div>

      <NavBarButtons collapsed={collapsed} />

      <div className="hidden md:w-full md:flex flex-col items-center gap-4 justify-center mb-4 p-4">
        {/* {collapsed ? (
          <Button
            variant={"ghost"}
            className="rounded-lg"
            onClick={() => setCollapsed(false)}
          >
            <ArrowRightToLine />
          </Button>
        ) : (
          <Button
            variant={"ghost"}
            className="rounded-lg w-full justify-start gap-2"
            onClick={() => setCollapsed(true)}
          >
            <ArrowLeftToLine /> Collapse
          </Button>
        )} */}

        <DropdownMenu>
          <DropdownMenuTrigger>
            {collapsed ? (
              <div className="h-[40px] w-[40px]">
                <AvatarProfile />
              </div>
            ) : (
              <Button
                variant={"ghost"}
                className="rounded-lg w-full justify-start gap-2"
              >
                <div className="h-[40px] w-[40px] p-1">
                  <AvatarProfile />
                </div>
                <small className="text-sm font-medium leading-none truncate">
                  {profile?.name}
                </small>
              </Button>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-[110]">
            <DropdownMenuItem
              onClick={() => {
                setUserDetails(null);
                localStorage.clear();
                router.push("/welcome");
              }}
            >
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default NavBar;
