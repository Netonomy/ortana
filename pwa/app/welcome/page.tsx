import PageContainer from "@/components/containers/PageContainer";
import LoginButton from "./LoginButton";
import PortalTextImage from "@/components/PortalTextImage";

export default function Welcome() {
  return (
    <PageContainer>
      <div className="flex h-[95%] flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 mb-6">
            <PortalTextImage />
            {/* <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
              Portal
            </h1> */}

            <div className="text-lg font-normal text-center text-gray-400 max-w-[335px] sm:max-w-full">
              Chat with data
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <LoginButton />

          {/* <Link href={"/register"}>
            <Button variant={"ghost"} className="w-80">
              Register
            </Button>
          </Link> */}
        </div>
      </div>

      {/* <p className="text-sm text-muted-foreground p-6">
        Your wallet, your data. 100% open source.
      </p> */}
    </PageContainer>
  );
}
