import Image from "next/image";

interface IconWithTextProps {
  iconSrc: string;
  text: string;
  iconClassName?: string;
  textClassName?: string;
  alt?: string;
}

const IconWithText = ({
  iconSrc,
  text,
  iconClassName = "",
  textClassName = "",
  alt = "icon",
}: IconWithTextProps) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={iconSrc}
        alt={alt}
        width={24}
        height={24}
        className={iconClassName}
      />
      <span className={textClassName}>{text}</span>
    </div>
  );
};

export default IconWithText;
