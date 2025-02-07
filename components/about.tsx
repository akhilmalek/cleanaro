import type { NextPage } from "next";
import Image from "next/image";
import Header from "./frame-component";
import styles from "./about.module.css";

export type AboutType = {
  className?: string;
};

const About: NextPage<AboutType> = ({ className = "" }) => {
  return (
    <div className={[styles.about, className].join(" ")}>
      <Image
        className={styles.videoIcon}
        width={60}
        height={60}
        alt=""
        src="/video-icon.svg"
      />
      <Header
        frameHeaderFlex="unset"
        frameHeaderAlignSelf="stretch"
        frameHeaderTop="0"
        frameHeaderPosition="sticky"
        lOGOCLEANARO21="/logo-cleanaro2-1@2x.png"
        homeMinWidth="41px"
        lEISTUNGENMinWidth="85px"
        jOBSSTELLENMinWidth="111px"
        bERUNSTextDecoration="unset"
      />
      <section className={styles.innerContentParent}>
        <div className={styles.innerContent}>
          <div className={styles.aboutParent}>
            <h1 className={styles.about1}>About</h1>
            <div
              className={styles.hipsterIpsumTattooed}
            >{`Hipster ipsum tattooed brunch I'm baby. Tonx mood they praxis 90's palo flannel. Keffiyeh I'm LaCroix blog vhs sus umami pour-over mlkshk. Health pok literally lyft bicycle gentrify. Hell vinegar shaman adaptogen forage drinking fashion pabst af. Bruh deep meggings crucifix hoodie pug I'm jianbing hot. Mumblecore cold-pressed ipsum coffee pug bird synth jean. Cred direct probably venmo 90's distillery brunch. Chambray kombucha asymmetrical pinterest microdosing succulents mug. Of whatever praxis pbr&b kogi salvia. 8-bit snackwave typewriter brooklyn thundercats raclette. Gastropub farm-to-table out slow-carb offal fixie pinterest adaptogen pabst same. Subway neutra helvetica jianbing lomo wayfarers. Bread keffiyeh snackwave subway vaporware sartorial kombucha.`}</div>
          </div>
        </div>
        <footer className={styles.rectangleParent}>
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
        </footer>
      </section>
    </div>
  );
};

export default About;