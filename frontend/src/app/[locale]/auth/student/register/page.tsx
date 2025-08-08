import RegisterForm from "@/app/components/form/RegisterForm";

export default function StudentRegisterPage() {
  return (
    <div className="min-h-screen flex w-full items-center justify-center p-4">
      <div className="max-w-[500px] w-full rounded-md p-6 my-32 border-brand-fg border-2 shadow-[8px_8px_0_0_rgba(0,0,0,1)] mx-auto">
        <div className="mb-11 text-brand-fg">
          <h5 className="font-black text-xl">REGISTER NOW 🚀</h5>
          <p>Get started on your learning journey today!</p>
        </div>
        <RegisterForm role="student" />
      </div>
    </div>
  );
}
