import { studentTools, teacherTools } from "@/constants/services";
import ToolHeadline from "./ToolHeadline";
import ToolCard from "@/app/components/landing/ToolCard";

export default function ToolsSection() {
  return (
    <section className="py-16">
      <div className="container p-5 mx-auto flex flex-col justify-center gap-11 lg:flex-row">
        <div className="flex flex-col gap-5 lg:w-[40%]">
          <div>
            <ToolHeadline role="Teacher" des="Powerful Teaching Tools" />
          </div>
          <div className="flex flex-col gap-5">
            {teacherTools.map((tool) => (
              <ToolCard
                key={tool.title}
                toolTitle={tool.title}
                toolDes={tool.description}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:w-[40%]">
          <div>
            <ToolHeadline role="Student" des="Enhanced Learning Experience" />
          </div>
          <div className="flex flex-col gap-5">
            {studentTools.map((tool) => (
              <ToolCard
                key={tool.title}
                toolTitle={tool.title}
                toolDes={tool.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
