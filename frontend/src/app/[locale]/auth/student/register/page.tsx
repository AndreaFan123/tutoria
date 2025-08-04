import RegisterForm from "@/app/components/auth/RegisterForm";

export default function StudentRegisterPage() {
  return (
    <div className="w-full max-w-[500px] mx-auto p-6 border border-gray-300 rounded-lg shadow-md mt-[20%] lg:mt-[10%]">
      <RegisterForm role="student" />
    </div>
  );
}
