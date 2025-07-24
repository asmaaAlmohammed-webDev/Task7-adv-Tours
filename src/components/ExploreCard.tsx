import Image from "next/image";
import IconWithText from "./IconWithTxt";
import { type ExploreCard } from "@/types/ExploreCardType";
const ExploreCard = ({
  image,
  title,
  description,
  price,
  iconWithText,
}: ExploreCard) => {
  return (
    <div
      className="explore-card  w-[85%] md:max-w-[330px] mx-auto"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <Image
        src={image}
        alt="explore-img"
        width={550}
        height={404}
        className="rounded-3xl mb-4"
      />
      <div className="content bg-white">
        <h4 className="title font-bold text-[18px] xL:text-2xl text-[#333333] ">
          {title}
        </h4>
        <div className="price mb-4 flex items-center gap-1 ">
          <span className="font-semibold text-[18px] text-[#333333] ">
            from
          </span>
          <span className=" font-extrabold text-2xl text-[#FA8B02]">
            {price}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center mb-3">
        <IconWithText
          iconSrc={iconWithText[0].imagePath}
          text={iconWithText[0].text}
          textClassName={iconWithText[0].textClassName}
        />
        <IconWithText
          iconSrc={iconWithText[1].imagePath}
          text={iconWithText[1].text}
          textClassName={iconWithText[1].textClassName}
        />
      </div>
      <p className="desc text-[16px] font-normal text-[#333333] leading-6">
        {description}
      </p>
    </div>
  );
};

export default ExploreCard;
