import TeacherAdminContainer from "@/app/components/admin/teacher/TeacherAdminContainer";
import { Locale } from "@/i18n/request";

export default async function TeacherAdminPage({
  params,
}: {
  params: Promise<{ locale: Locale; teacher_id: string }>;
}) {
  const props = await params;
  const { teacher_id, locale } = props;
  return (
    <div className="p-6 space-y-4">
      <section className="min-h-screen">
        <TeacherAdminContainer teacherId={Number(teacher_id)} locale={locale} />
      </section>
    </div>
  );
}
