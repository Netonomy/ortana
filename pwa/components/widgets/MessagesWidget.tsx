import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function MessagesWidget() {
  return (
    <Card className="w-full h-24 min-h-[98px] lg:h-full">
      <CardHeader>
        <CardTitle className="p-2">Messages</CardTitle>
      </CardHeader>
    </Card>
  );
}
