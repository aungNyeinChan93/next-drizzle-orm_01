import { getServerSession } from "@/features/auth/auth-actions";
import React from "react";

const HomePage = async () => {
  const session = await getServerSession();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-red-50">
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
