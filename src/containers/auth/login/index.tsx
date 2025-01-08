"use client";

import React from "react";

import Link from "next/link";

import { InputField, PasswordField } from "src/components/forms";
import { Button } from "src/components/ui/button";
import useLogin from "src/containers/auth/login/useLogin";

const Login = () => {
  const { form, onSubmit } = useLogin();
  const { control, handleSubmit, formState } = form;

  return (
    <div className="h-screen bg-gray-200">
      <div className="flex h-full items-center justify-center">
        <div className="w-[500px] rounded-lg bg-white shadow-lg">
          <div className="p-5">
            <h2 className="mb-2 text-2xl font-bold text-gray-800">
              Welcome Back!
            </h2>
            <p className="mb-6 text-gray-700">Please sign in to your account</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <InputField
                  name="email"
                  control={control}
                  label="Username"
                  placeholder="Please enter your username"
                />
              </div>
              <div className="mb-6">
                <PasswordField
                  control={control}
                  name="password"
                  placeholder="Please enter your password"
                  label="Password"
                />
              </div>
              <div className="flex items-center justify-between">
                <Button
                  type="submit"
                  loading={formState?.isSubmitting || formState?.isLoading}
                >
                  Sign In
                </Button>
                <Link
                  href="/forgot-password"
                  className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
                >
                  Forgot Password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
