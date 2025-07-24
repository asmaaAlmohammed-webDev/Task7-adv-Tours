import Image from "next/image";

const OffersComp = () => {
  return (
    <div className="relative mb-28 bg-[#FBD8C3] px-6 md:px-12  2xl:px-[140px] 4xl:px-[300px]">
      <div className="flex flex-col lg:flex-row justify-between items-center min-h-[450px] pt-12 pb-28 lg:pb-0">
        <div
          className="bg-[#FFFFFF4D] rounded-3xl p-[25px] max-w-[569px] text-center "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h3 className="font-extrabold text-[24px] lg:text-[32px] text-[#333333] mb-6">
            Get Special Offers for Organizations
          </h3>
          <p className="font-normal text-[16px] lg:text-[18px] text-[#000000] leading-[26px] mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="bg-[#FA8B02] text-white py-2.5 px-6 rounded-[50px] font-semibold text-[18px] lg:text-[20px] cursor-pointer hover:bg-orange-600 transition duration-300">
            Contact Us
          </button>
        </div>

        {/* Image */}
        <div className="relative w-[200px] md:w-[280px] lg:w-[320px] xl:w-[380px] 2xl:w-[427px] mt-10 lg:mt-0">
          <Image
            src="/assets/imgs/OffersImg.png"
            alt="Offers-Img"
            width={427}
            height={600}
            className="lg:absolute lg:right-0 w-full md:mb-[-110px] md:mt-[-30px] lg:mb-[-90px] lg:mt-[-250px] xl:mb-[-58px] xl:mt-[-330px] 2xl:mb-[-58px] 2xl:mt-[-400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default OffersComp;
