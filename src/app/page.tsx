import HeaderWrapper from "@/components/HeaderWrapper";
import Hero from "@/sections/Hero";
import ExploreDestinantions from "@/sections/ExploreDestinantions";
import { aboutData } from "@/data/AboutComp";
import AboutCompany from "@/sections/AboutCompany";
import CustomersSays from "@/sections/CustomersSays";
import OffersComp from "@/components/OffersComp";
import TourServices from "@/sections/TourServices";
import PopularPackagesCard from "@/components/PopularPackagesCard";
import PopularPackages from "@/sections/PopularPackages";
import BikeBooksForm from "@/components/BikeBooksForm";
import BikeBooks from "@/sections/BikeBooks";

export default function Home() {
  return (
    <>
      <HeaderWrapper backgroundImage="/assets/imgs/hero-home.png">
        <Hero
          title=" Enjoy in the best way!"
          description="  Enjoy our services for your trip anytime"
          showFilter={true}
        />
      </HeaderWrapper>
      <ExploreDestinantions />
      <AboutCompany
        subtitle={aboutData[0].subtitle}
        title={aboutData[0].title}
        description={aboutData[0].description}
        counters={aboutData[0].counters}
        className="flex-row"
        imgSrc="/assets/imgs/about-company-home.png"
        widthImage={450}
        heightImage={650}
      />
      <OffersComp />
      <TourServices />
      <BikeBooks />
      <PopularPackages />
      <CustomersSays />
    </>
  );
}
