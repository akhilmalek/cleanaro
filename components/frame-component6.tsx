import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <section className={[styles.cleanaroHomePageInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.contentTwoParagraphWrapper}>
          <div className={styles.contentTwoParagraph}>
            <div className={styles.contentTwoTitle}>
              <h1 className={styles.tristiquePortaLorem}>
                Tristique porta lorem donec lorem pretium
              </h1>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur morbi scelerisque Imperdiet
              dignissim urna malesuada porttitor ornare.
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.testimonialSliderWrapper}>
            <div className={styles.testimonialSlider}>
              <Image
                className={styles.testimonialSliderChild}
                loading="lazy"
                width={80}
                height={80}
                alt=""
                src="/group-1116605100.svg"
              />
              <div className={styles.testimonialCards}>
                <Image
                  className={styles.testimonialCardsChild}
                  loading="lazy"
                  width={185}
                  height={2}
                  alt=""
                  src="/line-3.svg"
                />
              </div>
              <Image
                className={styles.testimonialSliderChild}
                width={80}
                height={80}
                alt=""
                src="/group-1116605100.svg"
              />
              <div className={styles.testimonialCards}>
                <Image
                  className={styles.testimonialCardsChild}
                  loading="lazy"
                  width={185}
                  height={2}
                  alt=""
                  src="/line-3.svg"
                />
              </div>
              <Image
                className={styles.testimonialSliderChild}
                width={80}
                height={80}
                alt=""
                src="/group-1116605100.svg"
              />
              <div className={styles.testimonialCards}>
                <Image
                  className={styles.testimonialCardsChild}
                  loading="lazy"
                  width={185}
                  height={2}
                  alt=""
                  src="/line-3.svg"
                />
              </div>
              <Image
                className={styles.testimonialSliderChild}
                width={80}
                height={80}
                alt=""
                src="/group-1116605100.svg"
              />
            </div>
          </div>
          <div className={styles.testimonialContent}>
            <div className={styles.testimonialQuotes}>
              <b className={styles.loremIpsum}>Lorem ipsum</b>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor consectetur morbi scelerisque Imperdiet
              </div>
            </div>
            <div className={styles.testimonialQuotes}>
              <b className={styles.loremIpsum}>Lorem ipsum</b>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor consectetur morbi scelerisque Imperdiet
              </div>
            </div>
            <div className={styles.testimonialQuotes}>
              <b className={styles.loremIpsum}>Lorem ipsum</b>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor consectetur morbi scelerisque Imperdiet
              </div>
            </div>
            <div className={styles.testimonialQuotes}>
              <b className={styles.loremIpsum}>Lorem ipsum</b>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor consectetur morbi scelerisque Imperdiet
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
