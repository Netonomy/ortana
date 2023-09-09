import BackBtn from "@/components/BackBtn";
import PageContainer from "@/components/containers/PageContainer";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageContainer>
      <div className="absolute top-2 left-2">
        <BackBtn />
      </div>

      {children}
    </PageContainer>
  );
}
