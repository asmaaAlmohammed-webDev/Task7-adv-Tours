import TourServicesCard from "@/components/TourServicesCard";
import { TourServicesCardData } from "@/data/TourServicesCardData";

const TourServices = () => {
  return (
    <section className="px-6 md:px-12  2xl:px-[130px] 4xl:px-[300px] mb-28">
      <div className="cards flex flex-wrap gap-8 4xl:gap-14 justify-center items-center">
        {TourServicesCardData?.map((cardData) => (
          <TourServicesCard
            key={cardData.id}
            image={cardData.image}
            title={cardData.title}
            description={cardData.description}
          />
        ))}
      </div>
    </section>
  );
};

export default TourServices;
