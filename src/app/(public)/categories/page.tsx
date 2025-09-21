import { getALlCategoryWithArticles } from "@/features/categories/categories-utils";
import React from "react";

const CategoriesPage = async () => {
  const categories = await getALlCategoryWithArticles();

  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(categories, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default CategoriesPage;
