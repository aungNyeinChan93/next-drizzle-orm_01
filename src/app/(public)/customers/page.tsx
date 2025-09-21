import { getAllCustomers } from "@/features/customers/customers-utils";
import Link from "next/link";
import React from "react";

const CustomersPage = async () => {
  const customers = await getAllCustomers();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen p-4 bg-green-50">
        <div className="p-3 bg-sky-300 rounded-lg flex justify-between">
          <p>Customers</p>
          <Link href={"/customers/add"}>➕</Link>
        </div>
        <section>
          <pre>{JSON.stringify(customers, null, 2)}</pre>
        </section>
      </main>
    </React.Fragment>
  );
};

export default CustomersPage;
