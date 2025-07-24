export interface InputField {
  label: string;
  placeholder: string;
}
export interface LinkText {
  text: string;
  span: string;
}
export interface AuthFormData {
  title: string;
  TxtBtn: string;
  inputs: InputField[];
  infoText?: string; // For login
  checkText?: boolean; // For signup
  linkText: {
    text: string;
    span: string;
  };
}
