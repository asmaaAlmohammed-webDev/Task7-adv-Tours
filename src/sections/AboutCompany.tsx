import AboutComp from "@/components/AboutComp";
import { CounterItem } from "@/types/AboutCompType";
import Image from "next/image";
interface AboutCompanyProps {
  subtitle: string;
  title: string;
  description: string;
  counters: CounterItem[];
  className?: string;
  widthImage?: number;
  heightImage?: number;
  imgSrc: string;
}

const AboutCompany = ({
  subtitle,
  title,
  description,
  counters,
  className,
  widthImage,
  heightImage,
  imgSrc,
}: AboutCompanyProps) => {
  return (
    <section className="px-6 md:px-12  2xl:px-[160px] 4xl:px-[300px] mb-28  ">
      <div
        className={`flex flex-wrap md:flex-nowrap  justify-center 2xl:justify-between items-center gap-7 ${className}`}
      >
        <div className="w-[300px] md:w-[330px] xl:w-[450px]  ">
          <Image
            src={imgSrc}
            alt="img-about"
            width={widthImage}
            height={heightImage}
            layout="responsive"
          />
        </div>
        <AboutComp
          subtitle={subtitle}
          title={title}
          description={description}
          counters={counters}
        />
      </div>
    </section>
  );
};

export default AboutCompany;
