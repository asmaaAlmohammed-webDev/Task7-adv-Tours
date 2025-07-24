import AdSectionCard from "@/components/AdSectionCard";
import { AdSectionCardsData } from "@/data/AdSectionCardsData";

const AdSection = () => {
  return (
    <section className="px-6 md:px-12 2xl:px-[250px] 4xl:px-[300px] py-[83px] mb-28 bg-[url('/assets/imgs/bg-img.webp')] bg-cover  bg-no-repeat">
      <div className="cards flex justify-center items-center flex-wrap gap-7 lg:gap-14 4xl:gap-[83px]">
        {AdSectionCardsData?.map((cardData) => (
          <AdSectionCard
            key={cardData.id}
            icon={cardData.icon}
            description={cardData.description}
          />
        ))}
      </div>
    </section>
  );
};

export default AdSection;
