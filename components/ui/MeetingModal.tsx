import React, { ReactNode } from "react";

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
  return <div>MeetingModal</div>;
};

export default MeetingModal;
