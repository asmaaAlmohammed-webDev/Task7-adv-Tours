import CustomersCard from "@/components/CustomersCard";
import GeneralSlider from "@/components/GeneralSlider";
import TilteComp from "@/components/TilteComp";
import { CustomerCardsData } from "@/data/CustomerCardsData";
const CustomersSays = () => {
  return (
    <section className=" mb-28">
      <div className="px-6 md:px-12  2xl:px-[140px] 4xl:px-[300px]">
        <TilteComp title="Happy Customers Says" />
      </div>
      <GeneralSlider
        breakpoints={{
          320: { slidesPerView: 1 },
          868: { slidesPerView: 2 },
        }}
        items={CustomerCardsData?.map((cardData) => (
          <CustomersCard
            key={cardData.id}
            image={cardData.image}
            name={cardData.name}
            description={cardData.description}
          />
        ))}
      />
    </section>
  );
};

export default CustomersSays;
