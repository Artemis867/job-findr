import React, {useState, useEffect, useCallback} from "react";

import {useForm} from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios";

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

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { setAuthCredentials, signup } from "@/common/user.common";
import { useNavigate } from "react-router-dom";


const signupFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address."
  }).max(50, {
    message: "Email must not exceed to 50 characters.",
  }),
  full_name: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }).max(50, {
    message: "Full name must not exceed to 50 characters."
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }).max(30, {
    message: "Password must not exceed to 30 characters."
  }),
  confirm_password: z.string().min(2, {
    message: "Confirm password must be at least 2 characters.",
  }).max(30, {
    message: "Confirm password must not exceed to 30 characters."
  }),
}).refine((data) => data.password === data.confirm_password, {
  message: "Passwords don't match",
  path: ["confirm_password"], // path of error
});

export default function SignupForm () {

  const navigate = useNavigate();
  
  // 1. Define your form.
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      email: "",
      full_name: "",
      password: "",
      confirm_password: "",
    },
  });
 

  const onSubmit = useCallback(async (inputData: z.infer<typeof signupFormSchema>) => {

    try {
      const result = await signup(inputData);
      
      if(result.data.success) {
        setAuthCredentials(result.data.username, result.data.token);
        navigate('/home');
      }

    } catch (err) {
      console.log('request error: ');
      console.log(err);
    }
  }, []);

  const formMarkup = (
    <Form {...form}>
          <CardContent>
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Ensure to provide a correct email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="Ensure to provide your correct full name" {...field} />
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
                    <Input type="password" placeholder="Ensure to provide a strong password." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Confirm your password." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
              <Button type="submit">Signup</Button>
          </form>
      </CardContent>
    </Form>
  );

  return (
    <>  
      <Card className="w-[450px] m-5 mt-10">
        <CardHeader>
          <CardTitle>Signup here</CardTitle>
          <CardDescription>Create your JobFindr account now and start hunting your dream job.</CardDescription>
        </CardHeader>
        {formMarkup}
      </Card>
    </>
  );
}