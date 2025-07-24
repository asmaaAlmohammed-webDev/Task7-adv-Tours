import BikeBooksForm from "@/components/BikeBooksForm";
import TilteComp from "@/components/TilteComp";
import Image from "next/image";

const BikeBooks = () => {
  return (
    <section className="px-6 md:px-12  2xl:px-[140px] 4xl:px-[300px] py-[83px] mb-28 bg-[url('/assets/imgs/bg-img.webp')] bg-cover bg-no-repeat flex flex-col xl:flex-row items-center xl:items-center justify-between gap-8 relative">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 text-center  lg:text-left">
        <div className="text-center">
          <TilteComp title="Book Now Bike" />
        </div>
        <BikeBooksForm />
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:absolute lg:-bottom-10 lg:right-20">
        <div className="hidden xl:block w-full max-w-[724px]">
          <Image
            src="/assets/imgs/bike-picture.png"
            alt="bike-picture"
            width={724}
            height={542}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
};

export default BikeBooks;
