"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createBook } from "@/features/books/books-utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const DemoBook = () => {
  const [book, setBook] = useState("");
  const router = useRouter();
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-rd-50 flex justify-center items-center">
        <Card className="w-full max-w-2xl p-10">
          <div className="mt-3">
            <Input
              type="text"
              placeholder="enter book name"
              name="name"
              onChange={(e) => setBook(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <Button
              onClick={async () => {
                const book_id = await createBook(book);
                if (!book_id) {
                  return;
                }
                toast.success(`crete book success`);
                router.push("/books");
              }}
              variant={"secondary"}
            >
              Save Book
            </Button>
          </div>
        </Card>
      </main>
    </React.Fragment>
  );
};

export default DemoBook;
