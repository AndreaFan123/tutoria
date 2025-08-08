"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Textarea } from "@/components/ui/textarea";

const contactFormSchema = z.object({
  name: z.string().min(2).max(50),
  phone: z.string(),
  email: z.email(),
  description: z.string().min(10).max(400),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {},
  });

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white font-bold text-lg">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="placeholder:text-gray-500 bg-white h-[45px]"
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
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white font-bold text-lg">
                  Mobile Phone
                </FormLabel>
                <FormControl>
                  <Input
                    className="placeholder:text-gray-500 bg-white h-[45px]"
                    placeholder="Enter mobile phone"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white font-bold text-lg">
                  Contact Email
                </FormLabel>
                <FormControl>
                  <Input
                    className="placeholder:text-gray-500 bg-white h-[45px]"
                    placeholder="Enter email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white font-bold text-lg">
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="placeholder:text-gray-500 bg-white h-[45px]"
                    placeholder="Say something to us"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-3 items-start md:flex-row md:items-center">
            <Button
              type="submit"
              className="text-lg  hover:text-white w-full h-[50px]"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
