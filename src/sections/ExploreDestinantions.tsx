import ExploreCard from "@/components/ExploreCard";
import GeneralSlider from "@/components/GeneralSlider";
import TilteComp from "@/components/TilteComp";
import ExploreCards from "@/data/ExploreCards";

const ExploreDestinantions = () => {
  return (
    <section className="px-6 md:px-12  2xl:px-[140px] 4xl:px-[300px] mb-28">
      <TilteComp title="Explore Our Popular Destinantions " />
      <GeneralSlider
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        items={ExploreCards?.map((cardData) => (
          <ExploreCard
            key={cardData.id}
            image={cardData.image}
            title={cardData.title}
            description={cardData.description}
            price={cardData.price}
            iconWithText={cardData.iconWithText}
          />
        ))}
      />
    </section>
  );
};

export default ExploreDestinantions;
