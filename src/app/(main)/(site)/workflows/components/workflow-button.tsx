"use client";
import CustomModal from "@/components/global/custom-modal";
import WorkflowForm from "@/components/global/forms/workflow-form";
import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/modal-provider";
import { Plus } from "lucide-react";
import React from "react";

type Props = {};

const WorkflowButton = (props: Props) => {
  const { setOpen, setClose } = useModal();

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerfull tool that help you automate tasks."
      >
        <WorkflowForm />
      </CustomModal>
    );
  };

  return (
    <Button onClick={handleClick} size={"icon"}>
      <Plus />
    </Button>
  );
};

export default WorkflowButton;
