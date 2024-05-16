"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  return (
    <div className="text-center pt-2 items-center flex flex-col gap-4 text-lg">
      Redirect to workflow page
      <Button
        onClick={() => router.push("/workflows")}
        className="w-[100px]"
        variant="secondary"
      >
        Workflows
      </Button>
    </div>
  );
};

export default page;
