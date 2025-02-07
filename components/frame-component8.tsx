import type { NextPage } from "next";
import Image from "next/image";
import TestimonialItem from "./testimonial-item";
import styles from "./frame-component8.module.css";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: NextPage<FrameComponent8Type> = ({ className = "" }) => {
  return (
    <section className={[styles.containerWrapper, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.headingParent}>
            <div className={styles.heading}>
              <h1 className={styles.tristiquePortaLorem}>
                Tristique porta lorem donec
              </h1>
            </div>
            <div className={styles.consecteturMorbiScelerisque}>
              Consectetur morbi scelerisque Imperdiet dignissim urna malesuada
              porttitor ornare.
            </div>
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.testimonialHeader}>
              <Image
                className={styles.logoCleanaro22Icon}
                loading="lazy"
                width={93}
                height={48}
                alt=""
                src="/logo-cleanaro2-2@2x.png"
              />
              <Image
                className={styles.testimonialHeaderChild}
                width={515}
                height={1}
                alt=""
                src="/line-9.svg"
              />
            </div>
            <div className={styles.testimonialBody}>
              <div className={styles.testimonialItem}>
                <Image
                  className={styles.checkIcon}
                  width={24}
                  height={24}
                  alt=""
                  src="/check-3.svg"
                />
                <div className={styles.hipsterIpsumTattooed}>
                  Hipster ipsum tattooed brunch Chillwave same hella yes
                  tattooed Typewriter waistcoat schlitz
                </div>
              </div>
              <div className={styles.testimonialItem}>
                <div className={styles.checkmark}>
                  <Image
                    className={styles.checkIcon1}
                    width={24}
                    height={24}
                    alt=""
                    src="/check-3.svg"
                  />
                </div>
                <div className={styles.hipsterIpsumTattooed}>
                  Hipster ipsum tattooed brunch Chillwave same hella yes
                  tattooed Typewriter waistcoat schlitz
                </div>
              </div>
            </div>
            <TestimonialItem />
            <TestimonialItem
              hipsterIpsumTattooedColor="#eadde3"
              hipsterIpsumTattooedColor1="#eadde3"
            />
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.testimonialHeader}>
              <Image
                className={styles.samsungBlackWordmark}
                width={210}
                height={48}
                alt=""
                src="/samsung-black-wordmark-1.svg"
              />
              <Image
                className={styles.testimonialHeaderChild}
                width={515}
                height={1}
                alt=""
                src="/line-10.svg"
              />
            </div>
            <TestimonialItem
              hipsterIpsumTattooedColor="#535353"
              hipsterIpsumTattooedColor1="#535353"
            />
            <TestimonialItem
              hipsterIpsumTattooedColor="#535353"
              hipsterIpsumTattooedColor1="#535353"
            />
            <TestimonialItem
              hipsterIpsumTattooedColor="#535353"
              hipsterIpsumTattooedColor1="#535353"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;