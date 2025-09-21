import { getAllBooks } from "@/features/books/books-utils";
import React from "react";

const BooksPage = async () => {
  const books = await getAllBooks();
  return (
    <React.Fragment>
      <main>
        <pre>{books && JSON.stringify(books, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default BooksPage;
