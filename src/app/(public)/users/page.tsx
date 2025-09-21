import { getUsers } from "@/features/users/users-utils";
import React from "react";

const UsersPage = async () => {
  const users = await getUsers();
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default UsersPage;
