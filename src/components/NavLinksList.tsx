import Link from "next/link";
import { NavLinkItem } from "@/types/NavLinksType";

interface Props {
  links: NavLinkItem[];
  className?: string;
  classNameLink?: string;
}

const NavLinksList = ({ links, className = "", classNameLink = "" }: Props) => {
  return (
    <div className={`links ${className}`}>
      {links?.map((link) => (
        <Link key={link.name} href={link.href} className={classNameLink}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinksList;
