import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface MeetingModalProps {
  image?: string;
  buttonText?: string;
  buttonIcon?: string;
  title: string;
  handleClick?: () => void;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children?: ReactNode;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  handleClick,
  className,
  buttonText,
  children,
  image,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
