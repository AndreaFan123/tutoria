import RegisterForm from "@/app/components/auth/RegisterForm";

export default function TeacherRegisterPage() {
  return (
    <div className="min-h-screen flex w-full items-center justify-center p-4">
      <div className="max-w-[500px] w-full rounded-md p-6 border-brand-fg border-2 shadow-[8px_8px_0_0_rgba(0,0,0,1)] mx-auto">
        <RegisterForm role="teacher" />
      </div>
    </div>
  );
}
