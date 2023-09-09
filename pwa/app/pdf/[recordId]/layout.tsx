import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import AgentPage from "@/app/agent/page";
import PageContainer from "@/components/containers/PageContainer";
import AiSideCard from "@/app/home/storage/AiSideCard";

export default function PdfViewerLayout({ children }: { children: ReactNode }) {
  return <PageContainer>{children}</PageContainer>;
}
