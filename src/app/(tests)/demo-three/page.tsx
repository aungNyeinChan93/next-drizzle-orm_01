"use client";

import { createCategory } from "@/features/categories/categories-utils";
import React, { ChangeEvent, useState } from "react";

const TestCategory = () => {
  const [category, setCategory] = useState("");
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center bg-green-500">
        <div>
          <input
            type="text"
            name="category"
            id="category"
            value={category}
            className="bg-red-400 p-4"
            onChange={(e) => setCategory(e.target.value)}
          />
          <button
            type="button"
            onClick={async () => await createCategory(category)}
          >
            Create Category
          </button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default TestCategory;
