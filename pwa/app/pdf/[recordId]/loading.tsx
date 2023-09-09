import MyRingLoader from "@/components/MyRingLoader";
import { Card, CardContent } from "@/components/ui/card";

export default function PdfLoading() {
  return (
    <Card className="flex flex-1 w-full overflow-hidden">
      <CardContent className="w-full h-full overflow-y-auto flex flex-col p-0 relative">
        <div className="h-full w-full flex items-center justify-center">
          <MyRingLoader />
        </div>
      </CardContent>
    </Card>
  );
}
