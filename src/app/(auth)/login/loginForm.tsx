"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";

import { AuthRepo } from "@/repo/authRepo";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "password must be at least 2 characters.",
  }),
});

export function LoginForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errMssg, setErrMssg] = useState("");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if(isLoading) return;

      setIsLoading(true);
      const result = await AuthRepo.Login(values.username, values.password);

      switch (result.status) {
        case 200:
          router.push("/");
          break;
        case 401:
          setErrMssg("Invalid Credentials");
          break;
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return (
    <>
      <section className="h-screen bg-[whitesmoke] flex justify-center items-center px-5">
        <section className="w-[300px] bg-white text-black p-5 rounded flex flex-col gap-3 shadow-lg">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
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
                      <Input type="password" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {errMssg && <p className="text-center text-red-400">{errMssg}</p>}
              {!isLoading ? (
                <Button type="submit">Submit</Button>
              ) : (
                <Button type="button" disabled>
                  <Spinner></Spinner>
                </Button>
              )}
            </form>
          </Form>
        </section>
      </section>
    </>
  );
}
