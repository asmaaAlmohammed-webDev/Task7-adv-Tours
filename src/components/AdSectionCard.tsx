import { AdSectionCardType } from "@/types/AdSectionCardType";
import Image from "next/image";

const AdSectionCard = ({ icon, description }: AdSectionCardType) => {
  return (
    <div
      className="bg-[#FFFFFF4D] p-7 rounded-3xl h-[189px] w-[292px]"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className=" max-w-[60px] mx-auto">
        <Image
          src={icon}
          alt="icon"
          width={60}
          height={60}
          layout="responsive"
        />
      </div>
      <p className="font-semibold text-[20px] text-[#000000] text-center mt-3.5 max-w-[232px] mx-auto">
        {description}
      </p>
    </div>
  );
};

export default AdSectionCard;
