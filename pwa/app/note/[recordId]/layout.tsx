import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import AgentPage from "@/app/agent/page";
import PageContainer from "@/components/containers/PageContainer";

export default function NoteLayout({ children }: { children: ReactNode }) {
  return (
    <PageContainer>
      <div className="flex flex-1 w-full flex-row items-center gap-6 py-6 lg:p-4">
        <div className="flex-grow h-full flex flex-col items-center max-h-[calc(100vh-40px)]">
          {children}
        </div>

        <div className="hidden lg:flex flex-grow  h-full items-start max-w-[450px] max-h-[calc(100vh-40px)]">
          <Card className="w-full h-full overflow-hidden">
            <CardContent className="h-full w-full flex p-0">
              {/* <AgentPage /> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
}
