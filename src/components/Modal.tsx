"use client";
import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2 md:px-12  4xl:px-[250px] ">
      <div className="absolute inset-0 bg-[#333333] opacity-80 h-screen"></div>
      <div className="bg-white p-6 rounded-xl relative z-50 max-w-md w-full shadow-[0px_4px_20px_0px_#FFFFFF40]">
        <button onClick={onClose} className="absolute top-15 right-15">
          <IoClose className=" text-gray-500 hover:text-red-500 cursor-pointer w-[24px] h-[24px]" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
