import React, {useState, useEffect, useCallback} from "react";

import {useForm} from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { setAuthCredentials, signin } from "@/common/user.common";
import { useNavigate } from "react-router-dom";


const loginFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }).max(30, {
    message: "Password must not exceed to 30 characters."
  })
});


export default function LoginForm() {

  const navigate = useNavigate();

  // 1. Define your form.
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = useCallback(async (inputData: z.infer<typeof loginFormSchema>) => {
    
    try {
      const response = await signin(inputData);
      if(response.data.success) {
        setAuthCredentials(response.data.username, response.data.token);
        navigate('/home');
      }
    } catch(err) {
      // console.log('[TRACK] API error:');
      // console.log(err);
    }

  }, []);


  const formMarkup = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
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
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-10">
          <Button className="w-[100%] mt-8" type="submit">Sign In</Button>
        </div>
      </form>
    </Form>
  );


  return (
    <>
      {formMarkup}
    </>
  );
}