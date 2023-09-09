import { ReactNode } from "react";
import NavBar from "../../../components/NavBar";
import SideDrawer from "../../../components/SideDrawer";
import AiSideCard from "./AiSideCard";

export default function StorageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 w-full flex-row items-center gap-6 py-6 lg:p-4 lg:pl-[120px] ">
      <SideDrawer />

      <div className="hidden lg:flex flex-grow items-start  h-full max-w-[335px]">
        <NavBar />
      </div>

      <div className="flex-grow h-full flex flex-col items-center max-h-[calc(100vh-40px)]">
        {children}
      </div>

      <AiSideCard />
    </div>
  );
}
