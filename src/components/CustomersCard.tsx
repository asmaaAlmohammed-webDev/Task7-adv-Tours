import Image from "next/image";
import { CustomersCardType } from "@/types/CustomersCardType";
const CustomersCard = ({ image, name, description }: CustomersCardType) => {
  return (
    <div className="bg-white max-w-[700px] flex flex-col justify-center items-center text-center max-h-[406px] mx-auto p-6">
      <Image
        src={image}
        alt="customer-img"
        width={80}
        height={80}
        className="mb-2.5"
      />
      <p className="name font-normal text-[18px] text-[#333333] mb-9 ">
        {name}
      </p>
      <div className="relative h-max bg-white">
        <p className="desc font-normal text-[18px] text-[#333333] leading-7">
          {description}
        </p>
        <Image
          src="/assets/imgs/customers/qutes.svg"
          alt="customer-img"
          width={80}
          height={80}
          className="absolute -top-15 left-0"
        />
        <Image
          src="/assets/imgs/customers/qutes.svg"
          alt="customer-img"
          width={80}
          height={80}
          className="absolute -bottom-10 right-0"
        />
      </div>
    </div>
  );
};

export default CustomersCard;
