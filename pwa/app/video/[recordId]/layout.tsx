import AgentPage from "@/app/agent/page";
import AiSideCard from "@/app/home/storage/AiSideCard";
import PageContainer from "@/components/containers/PageContainer";
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

export default function VideoLayout({ children }: { children: ReactNode }) {
  return (
    <PageContainer>
      <div className="flex flex-1 w-full flex-row items-center gap-6 py-6 lg:p-4">
        <div className="flex-grow h-full flex flex-col items-center max-h-[calc(100vh-40px)]">
          {children}
        </div>

        <AiSideCard />
      </div>
    </PageContainer>
  );
}
