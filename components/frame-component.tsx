import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
  lOGOCLEANARO21: string;

  /** Style props */
  frameHeaderFlex?: CSSProperties["flex"];
  frameHeaderAlignSelf?: CSSProperties["alignSelf"];
  frameHeaderTop?: CSSProperties["top"];
  frameHeaderPosition?: CSSProperties["position"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  frameHeaderFlex,
  frameHeaderAlignSelf,
  frameHeaderTop,
  frameHeaderPosition,
  lOGOCLEANARO21,
}) => {
  const frameHeaderStyle: CSSProperties = useMemo(() => {
    return {
      flex: frameHeaderFlex,
      alignSelf: frameHeaderAlignSelf,
      top: frameHeaderTop,
      position: frameHeaderPosition,
    };
  }, [
    frameHeaderFlex,
    frameHeaderAlignSelf,
    frameHeaderTop,
    frameHeaderPosition,
  ]);

  return (
    <header
      className={[styles.logoCleanaro21Parent, className].join(" ")}
      style={frameHeaderStyle}
    >
      <Image
        className={styles.logoCleanaro21Icon}
        loading="lazy"
        width={101}
        height={52}
        alt=""
        src={lOGOCLEANARO21}
      />
      <div className={styles.topNavigationLinksWrapper}>
        <div className={styles.topNavigationLinks}>
          <div className={styles.navigationCategories}>
            <a className={styles.home}>Home</a>
            <a className={styles.berUns}>ÜBER UNS</a>
          </div>
          <a className={styles.ansprechpartner}>ANSPRECHPARTNER</a>
          <div className={styles.navigationCategories1}>
            <a className={styles.leistungen}>LEISTUNGEN</a>
            <a className={styles.jobsStellen}>{`JOBS & STELLEN`}</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
