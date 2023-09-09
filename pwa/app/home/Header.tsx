"use client";
import AvatarProfile from "@/components/AvatarProfile";
import BackBtn from "@/components/BackBtn";
import KeyLogo from "@/components/KeyLogo";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function Header({
  showBackBtn,
  rightSideComponents,
}: {
  showBackBtn?: boolean;
  rightSideComponents?: ReactNode[];
}) {
  const router = useRouter();

  return (
    <div className="absolute top-0 left-0 right-0 h-[70px] z-[100] backdrop-blur-3xl bg-white/30 border-b-[1.5px] dark:bg-black/30">
      <div className="h-full w-full flex items-center p-6">
        <div className="w-[20%]">{showBackBtn && <BackBtn />}</div>

        <div className="flex items-center justify-center gap-2 w-[60%]">
          <KeyLogo height={45} width={45} />
          {/* <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Netonomy
            </h3> */}
        </div>

        <div className="flex items-center gap-2 w-[20%] justify-end">
          {rightSideComponents}

          {/* <DropdownMenu>
            <DropdownMenuTrigger> */}
          <div className="h-[40px] w-[40px]">
            <AvatarProfile />
          </div>
          {/* </DropdownMenuTrigger>
            <DropdownMenuContent className="z-[110]">
              <DropdownMenuItem
                onClick={() => {
                  setToken(null);
                  setLoggedIn(false);
                  router.push("/welcome");
                }}
              >
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
      </div>
    </div>
  );
}
