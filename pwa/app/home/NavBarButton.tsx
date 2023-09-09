import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

function NavBarButton({
  selectedBtn,
  icon,
  path,
  setSelectedBtn,
  collapsed,
  title,
}: {
  selectedBtn: string;
  path: string;
  icon: ReactNode;
  setSelectedBtn: React.Dispatch<React.SetStateAction<string>>;
  collapsed: boolean;
  title: string;
}) {
  const router = useRouter();

  return (
    <Button
      variant={"ghost"}
      className={`rounded-lg gap-2 w-full justify-start transition ${
        selectedBtn === path.split("/").at(-1)
          ? "bg-primary hover:bg-primary text-secondary hover:text-secondary"
          : "bg-transparent  "
      }`}
      onClick={() => {
        router.push(path);
        setSelectedBtn(path.split("/").at(-1)!);
      }}
    >
      {icon}

      {!collapsed && <span className="hidden md:inline">{title}</span>}
    </Button>
  );
}

export default NavBarButton;
