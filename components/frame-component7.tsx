import type { NextPage } from "next";
import styles from "./frame-component7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {
  return (
    <section className={[styles.cleanaroHomePageInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.contentItems}>
          <div className={styles.contentItem}>
            <b className={styles.b}>100%</b>
          </div>
          <h3 className={styles.loremIpsum}>Lorem ipsum</h3>
        </div>
        <div className={styles.contentItems1}>
          <div className={styles.contentItemsChild} />
        </div>
        <div className={styles.contentItems}>
          <div className={styles.wrapper}>
            <b className={styles.b}>10475</b>
          </div>
          <h3 className={styles.loremIpsum}>Lorem ipsum</h3>
        </div>
        <div className={styles.contentItems1}>
          <div className={styles.contentItemsChild} />
        </div>
        <div className={styles.contentItems}>
          <div className={styles.loremIpsumDolorSitAmetConWrapper}>
            <b className={styles.b}>20</b>
          </div>
          <h3 className={styles.loremIpsum}>Lorem ipsum</h3>
        </div>
        <div className={styles.contentItems1}>
          <div className={styles.contentItemsChild} />
        </div>
        <div className={styles.contentItems}>
          <div className={styles.container}>
            <b className={styles.b}>10550</b>
          </div>
          <h3 className={styles.loremIpsum}>Lorem ipsum</h3>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
