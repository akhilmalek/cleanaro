import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./frame-component.module.css";

export type HeaderType = {
  className?: string;
  lOGOCLEANARO21: string;

  /** Style props */
  frameHeaderFlex?: CSSProperties["flex"];
  frameHeaderAlignSelf?: CSSProperties["alignSelf"];
  frameHeaderTop?: CSSProperties["top"];
  frameHeaderPosition?: CSSProperties["position"];
  homeMinWidth?: CSSProperties["minWidth"];
  lEISTUNGENMinWidth?: CSSProperties["minWidth"];
  jOBSSTELLENMinWidth?: CSSProperties["minWidth"];
  bERUNSTextDecoration?: CSSProperties["textDecoration"];
};

const Header: NextPage<HeaderType> = ({
  className = "",
  frameHeaderFlex,
  frameHeaderAlignSelf,
  frameHeaderTop,
  frameHeaderPosition,
  lOGOCLEANARO21,
  homeMinWidth,
  lEISTUNGENMinWidth,
  jOBSSTELLENMinWidth,
  bERUNSTextDecoration,
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

  const homeStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: homeMinWidth,
    };
  }, [homeMinWidth]);

  const lEISTUNGENStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: lEISTUNGENMinWidth,
    };
  }, [lEISTUNGENMinWidth]);

  const jOBSSTELLENStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: jOBSSTELLENMinWidth,
    };
  }, [jOBSSTELLENMinWidth]);

  const bERUNSStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: bERUNSTextDecoration,
    };
  }, [bERUNSTextDecoration]);

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
            <a className={styles.home} style={homeStyle}>
              Home
            </a>
            <a className={styles.berUns} style={bERUNSStyle}>
              ÜBER UNS
            </a>
          </div>
          <a className={styles.ansprechpartner}>ANSPRECHPARTNER</a>
          <div className={styles.navigationCategories1}>
            <a className={styles.leistungen} style={lEISTUNGENStyle}>
              LEISTUNGEN
            </a>
            <a
              className={styles.jobsStellen}
              style={jOBSSTELLENStyle}
            >{`JOBS & STELLEN`}</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;