import PageContainer from "@/components/containers/PageContainer";
import PrivateRoute from "@/components/PrivateRoute";
import NavBar from "../home/NavBar";

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivateRoute>
      <PageContainer>{children}</PageContainer>
    </PrivateRoute>
  );
}
