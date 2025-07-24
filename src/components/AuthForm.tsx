import { InputField, LinkText } from "@/types/AuthFormsDataType";
import Image from "next/image";
import Link from "next/link";

interface AuthFormProps {
  title: string;
  TxtBtn: string;
  inputs: InputField[];
  infoText?: string;
  checkText?: boolean;
  linkText: LinkText;
}

const AuthForm = ({
  title,
  TxtBtn,
  inputs,
  infoText,
  checkText,
  linkText,
}: AuthFormProps) => {
  return (
    <div className=" bg-white  max-w-[488px] p-6 rounded-3xl  ">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="title font-bold text-2xl md:text-[32px] text-[#333333] mb-5">
          {title}
        </h2>
      </div>

      {/* Form */}

      <form className="inputs space-y-4">
        {inputs?.map((input, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-sm font-semibold mb-1">{input.label}</label>
            <input
              type="text"
              placeholder={input.placeholder}
              className="border border-[#ccc] px-4 py-2 rounded-md text-sm"
            />
          </div>
        ))}
        {infoText && (
          <p className="text-sm text-[#33333399] text-right font-normal ">
            {infoText}
          </p>
        )}
        {checkText && (
          <p className="text-xs text-[#888888] ">
            <input type="checkbox" className="mr-2" />I agree with
            <span className="text-[#FA8B02] font-semibold cursor-pointer mx-1">
              Terms
            </span>
            and
            <span className="text-[#FA8B02] font-semibold cursor-pointer ml-1">
              Privacy
            </span>
          </p>
        )}
      </form>

      {/* Footer */}
      <div className="footer flex flex-col text-center mt-6">
        <button className="font-semibold text-[20px] text-white bg-[#FA8B02] py-2.5 px-6 rounded-[50px] mb-8 cursor-pointer hover:bg-orange-600 transition duration-300">
          {TxtBtn}
        </button>

        <span className="font-normal text-[16px] text-[#333333] mb-1.5">
          or
        </span>

        <button className="bg-transparent py-2.5 px-6 rounded-[50px] border border-[#33333333] font-semibold text-[18px] text-[#333333] mb-5 flex justify-center items-center gap-2.5 cursor-pointer">
          <Image
            src="/assets/imgs/icon_google.svg"
            alt="google"
            width={24}
            height={24}
          />
          <p>Sign Up with Google</p>
        </button>

        <p className="text-sm text-[#333333]">
          {linkText.text}
          {(linkText.span === "Login" && (
            <Link
              href="#"
              className="text-[#FA8B02] font-semibold cursor-pointer"
            >
              {linkText.span}
            </Link>
          )) ||
            (linkText.span === "Sign Up" && (
              <Link
                href="#"
                className="text-[#FA8B02] font-semibold cursor-pointer"
              >
                {linkText.span}
              </Link>
            ))}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
