import { type NavLinkItem } from "./NavLinksType";

export interface NavDataType {
  logo: string;
  links: NavLinkItem[];
  onLoginClick?: () => void;
  onSignupClick?: () => void;
}
