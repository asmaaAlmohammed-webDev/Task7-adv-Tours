export type FooterLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type FooterTextItem = {
  text: string;
};

export type FooterLinkItem = {
  text: string;
  href?: string;
};

export type FooterContactItem = {
  icon: string;
  text: string;
};

export type FooterSocialIcon = {
  src: string;
  alt: string;
  className?: string;
};

export type FooterColumn = {
  title: string;
  items?: FooterTextItem[] | FooterContactItem[];
  links?: FooterLinkItem[];
  socialIcons?: FooterSocialIcon[];
};

export type FooterData = {
  logo: FooterLogo;
  columns: FooterColumn[];
  copyrightText: string;
};
