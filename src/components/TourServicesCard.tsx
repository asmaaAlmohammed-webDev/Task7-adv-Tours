import { TourServicesCardType } from "@/types/TourServicesCardType";
import Image from "next/image";

const TourServicesCard = ({
  image,
  title,
  description,
}: TourServicesCardType) => {
  return (
    <div className="w-[85%] md:max-w-[280px] 4xl:max-w-[330px] ">
      <div className=" mb-5">
        <Image
          src={image}
          alt=""
          width={330}
          height={302}
          layout="responsive"
        />
      </div>
      <div className="content bg-white h-32">
        <h4 className="font-bold text-2xl text-[#333333] mb-3">{title}</h4>
        <p className="font-normal text-[18px] text-[#333333] max-w-[330px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TourServicesCard;
