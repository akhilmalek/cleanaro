import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./testimonial-item.module.css";

export type TestimonialItemType = {
  className?: string;
  check: string;
  check1: string;

  /** Style props */
  hipsterIpsumTattooedColor?: CSSProperties["color"];
  hipsterIpsumTattooedColor1?: CSSProperties["color"];
};

const TestimonialItem: NextPage<TestimonialItemType> = ({
  className = "",
  check,
  hipsterIpsumTattooedColor,
  check1,
  hipsterIpsumTattooedColor1,
}) => {
  const hipsterIpsumTattooedStyle: CSSProperties = useMemo(() => {
    return {
      color: hipsterIpsumTattooedColor,
    };
  }, [hipsterIpsumTattooedColor]);

  const hipsterIpsumTattooed1Style: CSSProperties = useMemo(() => {
    return {
      color: hipsterIpsumTattooedColor1,
    };
  }, [hipsterIpsumTattooedColor1]);

  return (
    <div className={[styles.testimonialItem, className].join(" ")}>
      <div className={styles.checkmark}>
        <div className={styles.validation}>
          <Image
            className={styles.checkIcon}
            width={24}
            height={24}
            alt=""
            src={check}
          />
        </div>
        <div
          className={styles.hipsterIpsumTattooed}
          style={hipsterIpsumTattooedStyle}
        >
          Hipster ipsum tattooed brunch Chillwave same hella yes tattooed
          Typewriter waistcoat schlitz
        </div>
      </div>
      <div className={styles.checkmark}>
        <div className={styles.validation}>
          <Image
            className={styles.checkIcon}
            width={24}
            height={24}
            alt=""
            src={check1}
          />
        </div>
        <div
          className={styles.hipsterIpsumTattooed}
          style={hipsterIpsumTattooed1Style}
        >
          Hipster ipsum tattooed brunch Chillwave same hella yes tattooed
          Typewriter waistcoat schlitz
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
