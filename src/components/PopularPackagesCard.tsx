import Image from "next/image";
import IconWithText from "./IconWithTxt";
import { PopularPackagesCardType } from "@/types/PopularPackagesCardType";

const PopularPackagesCard = ({
  image,
  title,
  price,
  buttonText,
  iconWithTxt,
}: PopularPackagesCardType) => {
  return (
    <div
      className="w-[85%] md:max-w-[260px] 4xl:max-w-[330px]  "
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <div className="  ">
        <Image
          src={image}
          alt="Offers-Img"
          width={340}
          height={340}
          layout="responsive"
        />
      </div>
      <div className="p-6 ">
        <h5 className="font-extrabold text-[20px] text-[#333333] mt-6 mb-4">
          {title}
        </h5>
        <div className="price  mb-4">
          <span className="font-normal text-[20px]  text-[#333333]">€</span>
          <p className="font-bold text-5xl text-[#FA8B02]">{price}</p>
          <span className="font-normal text-[18px]  text-[#333333] ml-9">
            /day
          </span>
        </div>
        <div className="">
          {iconWithTxt?.map((item) => (
            <IconWithText
              iconSrc={item.icon}
              text={item.text}
              textClassName="font-normal text-[13px] 4xl:text-[18px] text-[#333333] mb-4"
              iconClassName="mr-4 mb-4"
            />
          ))}
        </div>
        <button className="w-[290px] py-3 px-6 rounded-[50px] border-[1px] border-[#FA8B02] bg-transparent font-semibold text-[20px]  text-[#FA8B02] mt-6 cursor-pointer hover:bg-orange-600 hover:text-white transition duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PopularPackagesCard;
