"use client";
import React from "react";
import { Button } from "src/components/ui/button";
import Modal from "src/components/ui/modal";
import { toast } from "sonner";
import { useHistory } from "src/hooks/useHistory";
import { useQuery } from "src/hooks/useQuery";

export default function Home() {
  const { push, reset, replace } = useHistory();
  const { name } = useQuery();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button>Hello</Button>
      <Button onClick={() => toast.success("toast")}>Toast</Button>
      <Button
        onClick={() =>
          push({
            pathName: "/",
            params: {
              name: "123",
            },
          })
        }
      >
        Push history
      </Button>
      <Button
        onClick={() =>
          replace({
            pathName: "/",
          })
        }
      >
        Replace history
      </Button>
      <Button onClick={() => reset()}>Reset</Button>
      <Modal
        closeOutSide
        title="abcd"
        content={({ open, setOpen }) => (
          <Button className="w-full" onClick={() => setOpen(false)}>
            Close Modal
          </Button>
        )}
        trigger={<Button>Open Modal</Button>}
      />
    </div>
  );
}
