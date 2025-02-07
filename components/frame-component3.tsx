import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Image from "next/image";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section className={[styles.cleanaroHomePageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.loremIpsumDolorConsecteturParent}>
            <h1 className={styles.loremIpsumDolor}>
              Lorem ipsum dolor consectetur
            </h1>
            <div className={styles.frameContainer}>
              <div className={styles.heroCheckIconsParent}>
                <div className={styles.heroCheckIcons}>
                  <Image
                    className={styles.checkIcon}
                    width={24}
                    height={24}
                    alt=""
                    src="/check.svg"
                  />
                </div>
                <div className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet consectetur morbi scelerisque
                  Imperdiet dignissim urna malesuada porttitor ornare.
                </div>
              </div>
              <div className={styles.heroCheckIconsParent}>
                <div className={styles.heroCheckIcons}>
                  <Image
                    className={styles.checkIcon}
                    width={24}
                    height={24}
                    alt=""
                    src="/check.svg"
                  />
                </div>
                <div className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet consectetur morbi scelerisque
                  Imperdiet dignissim urna malesuada porttitor ornare.
                </div>
              </div>
              <div className={styles.heroCheckIconsParent}>
                <div className={styles.heroCheckIcons}>
                  <Image
                    className={styles.checkIcon}
                    width={24}
                    height={24}
                    alt=""
                    src="/check.svg"
                  />
                </div>
                <div className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet consectetur morbi scelerisque
                  Imperdiet dignissim urna malesuada porttitor ornare.
                </div>
              </div>
            </div>
          </div>
          <Button variant="primary" >Lorem ipsum</Button>
        </div>
        <video className={styles.wrapper} autoPlay muted loop controls>
          <source src="https://youtu.be/wwpAQ0szKxg" />
        </video>
      </div>
    </section>
  );
};

export default FrameComponent3;
