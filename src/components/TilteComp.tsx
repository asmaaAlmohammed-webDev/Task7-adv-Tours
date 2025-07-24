const TilteComp = ({ title }: { title: string }) => {
  return (
    <h3
      className="title font-[800] text-2xl lg:text-[32px] mb-[60px] text-[#333333] "
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      {title}
    </h3>
  );
};

export default TilteComp;
