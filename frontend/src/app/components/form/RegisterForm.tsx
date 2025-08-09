"use client";
// TODO: Add eye and eye closed for password

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";
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
import { toast } from "sonner";

import { ApiService } from "@/constants/api";
import type {
  TeacherRegisterRequest,
  TeacherResponse,
  StudentRegisterRequest,
} from "@/types/auth";
import { Locale } from "@/i18n/request";

const studentFormSchema = z.object({
  name: z.string().min(2).max(50),
  login_code: z
    .string()
    .min(6, "Login code must be at least 6 characters long"),
  invite_code: z.string().min(4, "Invite code is required"),
});

const teacherFormSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(10, "Password must be at most 10 characters long"),
  full_name: z.string().min(5).max(50).optional(),
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

type RegisterFormProps = {
  role: "student" | "teacher";
  locale: Locale;
};

export default function RegisterForm({ role, locale }: RegisterFormProps) {
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
        const payload = values as TeacherRegisterRequest;
        const _result: TeacherResponse = await ApiService.registerTeacher(
          payload
        );
        toast.success("Registered successfully. Please log in.");
        router.push(`/${locale}/auth/teacher/login`);
        return;
      }

      if (role === "student") {
        const payload = values as StudentRegisterRequest;
        const _result: StudentRegisterRequest =
          await ApiService.registerStudent(payload);
        toast.success("Registered successfully. Please log in.");
        router.push(`/${locale}/auth/student/login`);
        return;
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to register";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const StudentFields = ({
    form,
  }: {
    form: UseFormReturn<StudentRegisterRequest>;
  }) => {
    return (
      <>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className="border-brand-fg border-2 h-[45px]"
                  placeholder="Enter Your Name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="login_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Login code</FormLabel>
              <FormControl>
                <Input
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
        <FormField
          control={form.control}
          name="invite_code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Invite Code</FormLabel>
              <FormControl>
                <Input
                  className="border-brand-fg border-2 h-[45px]"
                  placeholder="Enter Invite Code"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter 6 digits you've received from teacher
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
    form: UseFormReturn<TeacherRegisterRequest>;
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
                  className="border-brand-fg border-2 h-[45px]"
                  type="password"
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
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  className="border-brand-fg border-2 h-[45px]"
                  placeholder="Enter Full Name"
                  {...field}
                />
              </FormControl>
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
            <StudentFields
              form={form as UseFormReturn<StudentRegisterRequest>}
            />
          ) : (
            <TeacherFields
              form={form as UseFormReturn<TeacherRegisterRequest>}
            />
          )}
          <div className="flex flex-col gap-3 items-start md:flex-row md:items-center">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            <p>
              Already have an account?{" "}
              <Link
                className="underline font-bold"
                href={
                  role === "student"
                    ? `/${locale}/auth/student/login`
                    : `/${locale}/auth/teacher/login`
                }
              >
                Login
              </Link>{" "}
              here
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
