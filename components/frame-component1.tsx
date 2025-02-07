import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.contentThreeParagraphParent, className].join(" ")}>
      <div className={styles.contentThreeParagraph}>
        <div className={styles.contentThreeTitle}>
          <h1 className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <div className={styles.contentDescription}>
            <div
              className={styles.hipsterIpsumTattooed}
            >{`Hipster ipsum tattooed brunch I'm baby. Tonx mood they praxis 90's palo flannel. Keffiyeh I'm LaCroix blog vhs sus umami pour-over mlkshk. Health pok literally lyft bicycle gentrify. Hell vinegar shaman adaptogen forage drinking fashion pabst af. Bruh deep meggings crucifix hoodie pug I'm jianbing hot. Mumblecore cold-pressed ipsum coffee pug bird synth jean. Cred direct probably venmo 90's distillery brunch. Chambray kombucha asymmetrical pinterest microdosing succulents mug. Of whatever praxis pbr&b kogi salvia. 8-bit snackwave typewriter brooklyn thundercats raclette. Gastropub farm-to-table out slow-carb offal fixie pinterest adaptogen pabst same. Subway neutra helvetica jianbing lomo wayfarers. Bread keffiyeh snackwave subway vaporware sartorial kombucha.`}</div>
            <div className={styles.contentHighlights}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.highlightItem}>
                  <div className={styles.contact}>98%</div>
                </div>
                <div className={styles.loremIpsum}>Lorem ipsum</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentThreeParagraphTwo}>
          <div className={styles.contentThreeDescriptionTwo}>
            <div className={styles.contentThreeTitleTwo}>
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
      </div>
      <div className={styles.imageAndDescriptionTwoWrapper}>
        <div className={styles.imageAndDescriptionTwo}>
          <Image
            className={styles.imagePlaceholderIcon}
            width={433}
            height={510}
            alt=""
            src="/rectangle-111512-1@2x.png"
          />
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.emptyDescription}>550+</div>
            <div className={styles.loremIpsum1}>Lorem ipsum</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
