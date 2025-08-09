import { ApiService } from "@/constants/api";
import { TeacherResponse } from "@/types/auth";

interface PageProps {
  params: Promise<{ teacher_id: string }>;
}

export default async function TeacherAdminPage({ params }: PageProps) {
  const { teacher_id } = await params;
  const id = Number(teacher_id);

  if (Number.isNaN(id)) {
    return <div>Invalid teacher id</div>;
  }

  let teacher: TeacherResponse | null = null;
  let error: string | null = null;
  try {
    teacher = await ApiService.getTeacherById(id);
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to load teacher";
  }

  if (error) {
    return <div className="p-6 text-red-600">{error}</div>;
  }
  if (!teacher) {
    return <div className="p-6">No data</div>;
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Teacher Info</h1>
      <div className="space-y-1">
        <div>
          <span className="font-medium">ID:</span> {teacher.id}
        </div>
        <div>
          <span className="font-medium">Email:</span> {teacher.email}
        </div>
        <div>
          <span className="font-medium">Full name:</span>{" "}
          {teacher.full_name || "-"}
        </div>
        <div>
          <span className="font-medium">Subscription:</span>{" "}
          {teacher.subscription_level}
        </div>
        <div>
          <span className="font-medium">Created:</span>{" "}
          {new Date(teacher.created_at).toLocaleString()}
        </div>
        <div>
          <span className="font-medium">Last login:</span>{" "}
          {teacher.last_login_at
            ? new Date(teacher.last_login_at).toLocaleString()
            : "-"}
        </div>
        <div>
          <span className="font-medium">Active:</span>{" "}
          {teacher.is_active ? "Yes" : "No"}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-4">Invite Codes</h2>
        {teacher.invite_codes.length === 0 ? (
          <div className="text-sm text-muted-foreground">No invite codes</div>
        ) : (
          <ul className="list-disc pl-6">
            {teacher.invite_codes.map((c) => (
              <li key={c.id}>
                <span className="font-mono">{c.code}</span> –{" "}
                {c.is_used ? "Used" : "Unused"}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
