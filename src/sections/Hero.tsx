import TourFiltterContainer from "@/components/TourFiltterContainer";
import LocalFont from "next/font/local";
const podcastFont = LocalFont({
  src: "../../public/assets/fonts/Podcast.ttf",
});
interface HeroProps {
  title: string;
  description: string;
  showFilter?: boolean; // home hero
  showButton?: boolean; // about hero
  buttonText?: string;
  onButtonClick?: () => void;
  children?: React.ReactNode;
}

const Hero = ({
  title,
  description,
  showFilter,
  showButton,
  buttonText,
  onButtonClick,
}: HeroProps) => {
  return (
    <section className="hero flex flex-col items-center justify-center w-full  px-6 md:px-12 4xl:px-[250px]  pt-[185px] pb-16 ">
      <div className="content text-center">
        <h1
          className={`title font-normal text-5xl lg:text-7xl text-white mb-4 ${podcastFont.className}`}
        >
          {title}
        </h1>
        <p className="desc font-bold text-2xl text-white  md:max-w-[600px] xl:w-[847px] mx-auto">
          {description}
        </p>
      </div>
      {showFilter && <TourFiltterContainer />}
      {showButton && (
        <button className="max-w-[278px] py-3.5 px-6 rounded-[50px] border-[1.5px] border-white bg-transparent font-semibold text-[15px] 4xl:text-[20px]  text-white mt-6 cursor-pointer hover:bg-orange-600 transition duration-300">
          {buttonText}
        </button>
      )}
    </section>
  );
};

export default Hero;
