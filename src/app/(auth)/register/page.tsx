"use client";
import { registerAction } from "@/features/auth/auth-actions";
import { redirect } from "next/navigation";
import React, { useActionState } from "react";

const RegisterPage = () => {
  const [state, formAction] = useActionState(registerAction, undefined);
  if (state) {
    return redirect("/");
  }
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center bg-slate-50  text-black">
        <form action={formAction}>
          <input type="text" name="name" id="name" placeholder="enter name" />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter email"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter password"
          />
          <input type="submit" value="Save" />
        </form>
      </main>
    </React.Fragment>
  );
};

export default RegisterPage;
