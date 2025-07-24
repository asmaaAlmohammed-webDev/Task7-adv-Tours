import { FooterData } from "@/types/FooterDataType";

export const footerData: FooterData = {
  logo: {
    src: "/assets/imgs/logo.svg",
    alt: "logo",
    width: 130,
    height: 130,
  },
  columns: [
    {
      title: "Services",
      items: [
        { text: "Bike and Rickshaw rental" },
        { text: "Guided Tours of Lucca" },
        { text: "Guided Bike Tour of Lucca" },
        { text: "Trip In The Tuscan Hills" },
        { text: "Transportation With Luxury Cars" },
        { text: "Wine Tours By Bus With Guide" },
      ],
    },
    {
      title: "Home",
      links: [
        { text: "Home", href: "/" },
        { text: "About Us", href: "/about" },
        { text: "Tour Packages", href: "/tours" },
      ],
    },
    {
      title: "Help",
      links: [{ text: "Terms of Use" }, { text: "Privacy Policy" }],
    },
    {
      title: "Contacts",
      items: [
        {
          icon: "/assets/imgs/footer/info/location.svg",
          text: "Piazza Napoleone, Lucca, Tuscany",
        },
        {
          icon: "/assets/imgs/footer/info/phone.svg",
          text: "+39 346 368 5708",
        },
        {
          icon: "/assets/imgs/footer/info/mail.svg",
          text: "aliainlimo@gmail.com",
        },
      ],
    },
    {
      title: "Social Media",
      socialIcons: [
        {
          src: "/assets/imgs/footer/socail-icons/twitter.svg",
          alt: "twitter-icon",
          className: "ml-5",
        },
        {
          src: "/assets/imgs/footer/socail-icons/facebook.svg",
          alt: "facebook-icon",
        },
        {
          src: "/assets/imgs/footer/socail-icons/instagram.svg",
          alt: "instagram-icon",
        },
      ],
    },
  ],
  copyrightText: "Copyright © 2022. All rights reserved.",
};
