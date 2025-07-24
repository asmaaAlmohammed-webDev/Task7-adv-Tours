import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/data/FooterData";

const Footer = () => {
  const { logo, columns, copyrightText } = footerData;

  return (
    <footer className=" bg-[#333333] text-white px-6 md:px-12  4xl:px-[250px]  py-10 flex flex-col justify-center items-center">
      <div>
        {/* Logo */}

        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="mb-8"
        />

        {/* Footer Columns */}

        <div className="flex flex-col justify-between  border-b border-t border-gray-700 py-10 w-full mx-auto">
          <div className="flex flex-wrap gap-3  2xl:gap-10 4xl:gap-24  w-full">
            {columns.map((column, index) => (
              <div key={index}>
                <h4 className="font-extrabold text-[20px] mb-4">
                  {column.title}
                </h4>

                {/* Services items  */}
                {column.title === "Services" && column.items && (
                  <ul className="space-y-[10px] text-[18px] font-semibold">
                    {column.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="font-semibold text-[18px]">
                        {item.text}
                      </li>
                    ))}
                  </ul>
                )}

                {/*  Home and Help links */}

                {(column.title === "Home" || column.title === "Help") &&
                  column.links && (
                    <ul className="space-y-2 text-sm">
                      {column.links.map((link, linkIndex) => (
                        <li
                          key={linkIndex}
                          className={`font-semibold text-[18px] mb-2.5
                        ${
                          link.href
                            ? "hover:text-orange-600 transition duration-300"
                            : ""
                        }
                        ${
                          column.title === "Help"
                            ? "cursor-pointer hover:text-orange-600 transition duration-300"
                            : ""
                        }`}
                        >
                          {link.href ? (
                            <Link href={link.href}>{link.text}</Link>
                          ) : (
                            link.text
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                {/* Contact items */}

                {column.title === "Contacts" && column.items && (
                  <ul className="space-y-3 text-sm">
                    {column.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-2 mb-5">
                        {"icon" in item && (
                          <Image
                            src={item.icon}
                            alt=""
                            width={24}
                            height={24}
                          />
                        )}
                        <p className="font-semibold text-[18px]">{item.text}</p>
                      </li>
                    ))}
                  </ul>
                )}

                {/*  SocialMedia icons */}

                {column.title === "Social Media" && column.socialIcons && (
                  <div className="flex gap-5">
                    {column.socialIcons.map((icon, iconIndex) => (
                      <Image
                        key={iconIndex}
                        src={icon.src}
                        alt={icon.alt}
                        width={50}
                        height={50}
                        className={`cursor-pointer hover:-rotate-z-[360deg] transition duration-400 ${
                          icon.className || ""
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="text-[16px] text-center font-normal mt-8">
          {copyrightText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
