import LoginForm from "@/app/components/form/LoginForm";

export default function StudentLoginPage() {
  return (
    <div className="min-h-screen flex w-full items-center justify-center p-4">
      <div className="max-w-[500px] w-full rounded-md p-6 border-brand-fg border-2 shadow-[8px_8px_0_0_rgba(0,0,0,1)] mx-auto">
        <div className="mb-11 text-brand-fg">
          <h5 className="font-black text-xl">WELCOME BACK 🙌</h5>
          <p>Login to access your teaching / learning resources.</p>
        </div>
        <LoginForm role="student" />
      </div>
    </div>
  );
}
