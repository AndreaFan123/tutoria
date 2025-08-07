interface ToolHeadlineProps {
  role: string;
  des: string;
}

export default function ToolHeadline({ role, des }: ToolHeadlineProps) {
  return (
    <article className="flex flex-col gap-2 lg:flex-row items-center lg:gap-5">
      <span className="bg-white text-brand-fg px-2 py-1 rounded-full font-bold w-fit">
        {role}
      </span>
      <h4 className="text-white text-2xl font-black">{des}</h4>
    </article>
  );
}
