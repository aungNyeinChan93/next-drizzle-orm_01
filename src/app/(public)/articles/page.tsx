import { getAllArticles } from "@/features/articles/articles-utils";
import React from "react";

const ArticlesPage = async () => {
  const articles = await getAllArticles();
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(articles, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default ArticlesPage;
