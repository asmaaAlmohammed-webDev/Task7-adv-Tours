"use client";

import { AboutItem } from "@/types/AboutCompType";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const AboutComp = ({ subtitle, title, description, counters }: AboutItem) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [countersActive, setCountersActive] = useState<boolean[]>([]);

  useEffect(() => {
    setCountersActive(counters.map(() => false));
  }, [counters]);

  useEffect(() => {
    if (inView) {
      setCountersActive(counters.map(() => true));
    } else {
      setCountersActive(counters.map(() => false));
    }
  }, [inView, counters]);

  return (
    <div
      className=" text-center xl:text-start px-6 md:px-12  4xl:px-[250px]  mb-28"
      ref={ref}
    >
      <h6 className="sub-title text-[#333333] text-[16px] font-semibold mb-1.5">
        {subtitle}
      </h6>
      <h3 className="title text-[#333333] text-2xl xl:text-[32px] font-semibold xl:font-extrabold mb-8">
        {title}
      </h3>
      <p className="desc text-[#333333] text-[18px] font-normal leading-8 max-w-[700px] mb-8">
        {description}
      </p>
      <div className="counters flex flex-col md:flex-row gap-[50px] justify-center xl:justify-start">
        {counters?.map((counter, index) => {
          const number = parseInt(counter.number.replace(/\D/g, ""));
          const suffix = counter.number.replace(/[0-9]/g, "");

          return (
            <div key={index} className="count flex flex-col items-center">
              <span className="num text-[#FA8B02] text-2xl lg:text-[32px] font-bold mb-1.5">
                {countersActive[index] ? (
                  <CountUp
                    key={`${index}-${countersActive[index]}`}
                    end={number}
                    suffix={suffix}
                    duration={4.5}
                    delay={index * 0.3}
                  />
                ) : (
                  <>0{suffix}</>
                )}
              </span>
              <span className="desc-of-count text-[#333333] text-[16px] font-normal leading-6 w-[83px]">
                {counter.description}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutComp;
