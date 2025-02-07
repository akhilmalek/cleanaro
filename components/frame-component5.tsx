import type { NextPage } from "next";
import GroupComponent from "./group-component";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section className={[styles.cleanaroHomePageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.contentOneParagraphWrapper}>
          <div className={styles.contentOneParagraph}>
            <div className={styles.contentOneTitle}>
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
        <div className={styles.frameGroup}>
          <GroupComponent cardIcons="/rectangle-111514@2x.png" />
          <GroupComponent cardIcons="/rectangle-111537@2x.png" />
          <GroupComponent cardIcons="/rectangle-111538@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
