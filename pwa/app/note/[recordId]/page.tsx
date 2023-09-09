import { Card, CardContent } from "@/components/ui/card";

export default function NotePage({
  params: { recordId },
}: {
  params: { recordId: string };
}) {
  return (
    <Card className="flex flex-1 w-full overflow-hidden">
      <CardContent className="w-full h-full overflow-y-auto flex flex-col p-0 relative"></CardContent>
    </Card>
  );
}
