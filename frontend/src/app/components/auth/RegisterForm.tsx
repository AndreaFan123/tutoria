"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

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
};

export default function RegisterForm({ role }: RegisterFormProps) {
  const { schema: formSchema, defaultValues } = formConfig[role];
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  const StudentFields = ({ form }: { form: any }) => {
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

  const TeacherFields = ({ form }: { form: any }) => {
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
            <StudentFields form={form} />
          ) : (
            <TeacherFields form={form} />
          )}
          <div className="flex flex-col gap-3 items-start md:flex-row md:items-center">
            <Button type="submit">Submit</Button>
            <p>
              Already have an account?{" "}
              <Link
                className="underline font-bold"
                href={
                  role === "student"
                    ? "/auth/student/login"
                    : "/auth/teacher/login"
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
