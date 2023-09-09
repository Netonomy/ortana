import PageContainer from "@/components/containers/PageContainer";
import PrivateRoute from "@/components/PrivateRoute";
import NavBar from "./NavBar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivateRoute>
      <PageContainer>
        {children}
        <NavBar />
      </PageContainer>
    </PrivateRoute>
  );
}
