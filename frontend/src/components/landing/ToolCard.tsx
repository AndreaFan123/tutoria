import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ToolCardProps {
  toolTitle: string;
  toolDes: string;
}

export default function ToolCard({ toolTitle, toolDes }: ToolCardProps) {
  return (
    <Card className="gap-1 border-brand-fg shadow-[4px_8px_0_0_rgba(0,0,0,1)]">
      <CardHeader>
        <CardTitle className="text-lg">{toolTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{toolDes}</p>
      </CardContent>
    </Card>
  );
}
