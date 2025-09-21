import CreateCustomer from "@/components/customers/CreateCustomer";
import React from "react";

const CustomerAddPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <CreateCustomer />
      </main>
    </React.Fragment>
  );
};

export default CustomerAddPage;
