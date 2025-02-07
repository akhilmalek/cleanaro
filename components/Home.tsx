import type { NextPage } from "next";
import Image from "next/image";
import GroupComponent from "./group-component";
import styles from "./Home.module.css";

export type HomeType = {
  className?: string;
};

const Home: NextPage<HomeType> = ({ className = "" }) => {
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
          <a className={styles.link} href="/about">
            <div className={styles.appointmentButton}>
              <div className={styles.strongTermin}>Lorem ipsum</div>
            </div>
            <Image
              className={styles.linkIcon}
              width={40}
              height={40}
              alt=""
              src="/link.svg"
            />
          </a>
        </div>
        <GroupComponent />
      </div>
    </section>
  );
};

export default Home;
