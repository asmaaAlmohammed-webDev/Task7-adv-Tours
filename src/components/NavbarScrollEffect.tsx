"use client";
import { useEffect, useState } from "react";
import Navbar from "./NavBar";
import { NavData } from "@/data/NavData";
import Modal from "./Modal";
import AuthForm from "./AuthForm";
import { loginFormData } from "@/data/LoginFormData";
import { signupFormData } from "@/data/SignupFormData";
const NavbarScrollEffect = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"login" | "signup">("login");
  const handleOpenModal = (type: "login" | "signup") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        logo={NavData.logo}
        links={NavData.links}
        className={`${
          scrolled
            ? "bg-[#f7caa4] py-2 top-5  shadow-lg w-[95%] rounded-full left-1/2 transform -translate-x-1/2"
            : "w-full py-5 top-0  bg-[#FFFFFF33]"
        }`}
        onLoginClick={() => handleOpenModal("login")}
        onSignupClick={() => handleOpenModal("signup")}
      />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalType === "login" ? (
          <AuthForm {...loginFormData} />
        ) : (
          <AuthForm {...signupFormData} />
        )}
      </Modal>
    </>
  );
};

export default NavbarScrollEffect;
