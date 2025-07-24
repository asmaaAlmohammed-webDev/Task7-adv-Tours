import { AuthFormData } from "@/types/AuthFormsDataType";

export const loginFormData: AuthFormData = {
  title: "Login",
  TxtBtn: "Login",
  inputs: [
    { label: "Email Address", placeholder: "Enter your email address" },
    { label: "Password", placeholder: "Enter your password" },
  ],
  infoText: "Forgot your password?",
  linkText: {
    text: "Don't have an account?",
    span: "Sign Up",
  },
};
