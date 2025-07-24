import AdSectionCard from "@/components/AdSectionCard";
import HeaderWrapper from "@/components/HeaderWrapper";
import { aboutData } from "@/data/AboutComp";
import AboutCompany from "@/sections/AboutCompany";
import AdSection from "@/sections/AdSection";
import CustomersSays from "@/sections/CustomersSays";
import Hero from "@/sections/Hero";

const About = () => {
  return (
    <>
      <HeaderWrapper backgroundImage="/assets/imgs/hero-about.png">
        <Hero
          title="Our team cares about your full relax"
          description=" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
          showButton={true}
          buttonText="View our Tour Packages"
        />
      </HeaderWrapper>
      <AboutCompany
        subtitle={aboutData[1].subtitle}
        title={aboutData[1].title}
        description={aboutData[1].description}
        counters={aboutData[1].counters}
        className="flex-row"
        imgSrc="/assets/imgs/about.png"
        widthImage={600}
        heightImage={516}
      />
      <AdSection />
      <CustomersSays />
    </>
  );
};

export default About;
