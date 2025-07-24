import { AuthFormData } from "@/types/AuthFormsDataType";

export const signupFormData: AuthFormData = {
  title: "Create Account",
  TxtBtn: "Sign Up",
  inputs: [
    { label: "Name and Surname", placeholder: "Enter your name and surname" },
    { label: "Email Address", placeholder: "Enter your email address" },
    { label: "Password", placeholder: "Enter your password" },
  ],
  checkText: true,
  linkText: {
    text: "Already have an account?",
    span: "Login",
  },
};
