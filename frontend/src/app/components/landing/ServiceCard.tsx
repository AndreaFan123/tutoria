import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Image from "next/image";

interface ServiceCardProps {
  role: string;
  des: string;
  imgSrc: any;
  imgAlt: string;
}

export default function ServiceCard({
  role,
  des,
  imgSrc,
  imgAlt,
}: ServiceCardProps) {
  return (
    <Card className="w-full lg:w-1/2 border-brand-fg border-2 shadow-[4px_8px_0_0_rgba(0,0,0,1)]">
      <div className="flex flex-col items-center gap-4 lg:flex-row">
        <div className="flex flex-col gap-3">
          <CardHeader>
            <CardTitle className="text-xl text-white bg-brand-primary p-3 w-fit">
              {role}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-brand-fg text-lg">{des}</p>
          </CardContent>
        </div>
        <div className="w-[250px] lg:w-[600px]">
          <Image
            src={imgSrc}
            width={0}
            height={0}
            alt={imgAlt}
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </Card>
  );
}
