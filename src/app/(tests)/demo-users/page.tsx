import { getAllUsers, UserType } from "@/features/users/users-utils";
import React from "react";

const DemoUsersPage = async () => {
  const users = await getAllUsers();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50 text-slate-600">
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default DemoUsersPage;
