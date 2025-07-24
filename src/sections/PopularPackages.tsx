import PopularPackagesCard from "@/components/PopularPackagesCard";
import TilteComp from "@/components/TilteComp";
import { PopularPackagesCardData } from "@/data/PopularPackagesCardData";

const PopularPackages = () => {
  return (
    <section className="px-6 md:px-12  2xl:px-[160px] 4xl:px-[300px] mb-28">
      <TilteComp title="The Most Popular Packages" />
      <div className="cards flex justify-center items-center flex-wrap gap-12">
        {PopularPackagesCardData?.map((cardData) => (
          <PopularPackagesCard
            key={cardData.id}
            image={cardData.image}
            title={cardData.title}
            price={cardData.price}
            buttonText={cardData.buttonText}
            iconWithTxt={cardData.iconWithTxt}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularPackages;
