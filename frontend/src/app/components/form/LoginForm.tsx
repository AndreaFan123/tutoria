"use client";

// TODO: Add eye and eye closed for password

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/app/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import Link from "next/link";
import { Locale } from "@/i18n/request";
import {
  StudentLoginRequest,
  TeacherLoginRequest,
  TokenResponse,
} from "@/types/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ApiService } from "@/constants";
import { toast } from "sonner";

const studentFormSchema = z.object({
  login_code: z
    .string()
    .min(6, "Login code must be at least 6 characters long"),
});

const teacherFormSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(10, "Password must be at most 10 characters long"),
});

const formConfig = {
  student: {
    schema: studentFormSchema,
    defaultValues: {
      name: "",
      login_code: "",
      invite_code: "",
    },
  },
  teacher: {
    schema: teacherFormSchema,
    defaultValues: {
      email: "",
      password: "",
      full_name: "",
    },
  },
};

type LoginFormProps = {
  role: "student" | "teacher";
  locale: Locale;
};

export default function LoginForm({ role, locale }: LoginFormProps) {
  const { schema: formSchema, defaultValues } = formConfig[role];
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);

      if (role === "teacher") {
        const payload = values as TeacherLoginRequest;
        const result: TokenResponse = await ApiService.loginTeacher(payload);
        // Save token for subsequent API calls
        if (typeof window !== "undefined") {
          window.localStorage.setItem("access_token", result.access_token);
          window.localStorage.setItem("token_type", result.token_type);
          window.localStorage.setItem("teacher_id", String(result.teacher_id));
        }
        toast.success("Login successfully.");
        router.push(`/${locale}/admin/teacher/${result.teacher_id}`);
      }
    } catch (error) {}
  };

  const StudentFields = ({
    form,
  }: {
    form: UseFormReturn<StudentLoginRequest>;
  }) => {
    return (
      <>
        <FormField
          control={form.control}
          name="login_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Login code</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="border-brand-fg border-2 h-[45px]"
                  placeholder="Enter Login Code"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter 6 digits with characters for future login
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </>
    );
  };

  const TeacherFields = ({
    form,
  }: {
    form: UseFormReturn<TeacherLoginRequest>;
  }) => {
    return (
      <>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="border-brand-fg border-2 h-[45px]"
                  type="email"
                  placeholder="Enter Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="border-brand-fg border-2 h-[45px]"
                  placeholder="Enter Password"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Must mix with letters and numbers, at least 6 characters
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </>
    );
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {role === "student" ? (
            <StudentFields form={form as UseFormReturn<StudentLoginRequest>} />
          ) : (
            <TeacherFields form={form as UseFormReturn<TeacherLoginRequest>} />
          )}
          <div className="flex flex-col gap-3 items-start md:flex-row md:items-center">
            <Button type="submit">Submit</Button>
            <p>
              Don't have an account?{" "}
              <Link
                className="underline font-bold"
                href={
                  role === "student"
                    ? "/auth/student/register"
                    : "/auth/teacher/register"
                }
              >
                Sign in
              </Link>{" "}
              here
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
