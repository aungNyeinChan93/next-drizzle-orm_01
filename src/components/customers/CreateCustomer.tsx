"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createCustomerAction } from "@/features/customers/customers-actions";
import { redirect } from "next/navigation";
import React, { useActionState } from "react";

const CreateCustomer = () => {
  const [state, formAction] = useActionState(createCustomerAction, undefined);

  if (state?.success) {
    return redirect("/customers");
  }
  return (
    <React.Fragment>
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Create Customer</CardTitle>
          <CardAction>➕</CardAction>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className="mt-3">
              {!state?.success && (
                <p className="text-red-600 "> {state?.errors?.name}</p>
              )}
              <Label>Name</Label>
              <Input
                type="text"
                name="name"
                placeholder="enter name "
                className="mt-2 py-5"
              />
            </div>
            <div className="mt-3">
              {!state?.success && (
                <p className="text-red-600 "> {state?.errors?.email}</p>
              )}

              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="enter email "
                className="mt-2 py-5"
              />
            </div>
            {/* <div className="mt-3">
              {!state?.success && (
                <p className="text-red-600 "> {state?.errors?.phone}</p>
              )}

              <Label>Phone</Label>
              <Input
                type="text"
                name="phone"
                placeholder="enter phone "
                className="mt-2 py-5"
              />
            </div>
            <div className="mt-3">
              <Label>Avator</Label>
              <Input
                type="file"
                name="phone"
                placeholder="enter avator "
                className="mt-2"
              />
            </div> */}

            <div className="mt-3">
              <Button
                type="submit"
                variant={"outline"}
                className=" inline w-full"
              >
                Save
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default CreateCustomer;
