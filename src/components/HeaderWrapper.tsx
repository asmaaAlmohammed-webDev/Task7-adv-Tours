const HeaderWrapper = ({
  backgroundImage,
  children,
}: {
  backgroundImage: string;
  children: React.ReactNode;
}) => {
  return (
    <header
      className="h-max xl:h-screen w-full bg-cover bg-center relative mb-28"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#00000033]" />

      {/* hero*/}

      <div className="relative z-10">{children}</div>
    </header>
  );
};
export default HeaderWrapper;
