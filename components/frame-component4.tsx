import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section className={[styles.cleanaroHomePageInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.samsungBlackWordmarkParent}>
          <Image
            className={styles.samsungBlackWordmark}
            loading="lazy"
            width={210}
            height={32}
            alt=""
            src="/samsung-black-wordmark.svg"
          />
          <Image
            className={styles.flickrWithoutTrademark}
            loading="lazy"
            width={106}
            height={32}
            alt=""
            src="/flickr-without-trademark.svg"
          />
          <Image
            className={styles.greaterMiamiIcon}
            loading="lazy"
            width={95}
            height={32}
            alt=""
            src="/greater-miami.svg"
          />
          <Image
            className={styles.panasonicIcon}
            loading="lazy"
            width={209}
            height={32}
            alt=""
            src="/panasonic.svg"
          />
          <Image
            className={styles.g6Icon}
            loading="lazy"
            width={170}
            height={32}
            alt=""
            src="/g6@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
