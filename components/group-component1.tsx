import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./group-component1.module.css";

export type GroupComponent1Type = {
  className?: string;
  group1116605111: string;

  /** Style props */
  groupDivBoxShadow?: CSSProperties["boxShadow"];
  rectangleDivBoxShadow?: CSSProperties["boxShadow"];
  bruhDeepMeggingsColor?: CSSProperties["color"];
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({
  className = "",
  groupDivBoxShadow,
  rectangleDivBoxShadow,
  group1116605111,
  bruhDeepMeggingsColor,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      boxShadow: groupDivBoxShadow,
    };
  }, [groupDivBoxShadow]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      boxShadow: rectangleDivBoxShadow,
    };
  }, [rectangleDivBoxShadow]);

  const bruhDeepMeggingsStyle: CSSProperties = useMemo(() => {
    return {
      color: bruhDeepMeggingsColor,
    };
  }, [bruhDeepMeggingsColor]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} style={rectangleDivStyle} />
      <div className={styles.memberProfiles}>
        <div className={styles.memberInfo}>
          <Image
            className={styles.loremIpsumDolorSitAmetCon}
            loading="lazy"
            width={40}
            height={40}
            alt=""
            src="/rectangle-15@2x.png"
          />
        </div>
        <div className={styles.memberNamesAndRoles}>
          <div className={styles.alexenderMartini}>Alexender Martini</div>
          <div className={styles.ceoXyzCompny}>CEO, XYZ Compny</div>
        </div>
      </div>
      <div className={styles.memberQuote}>
        <Image
          className={styles.memberQuoteChild}
          loading="lazy"
          width={148}
          height={28}
          alt=""
          src={group1116605111}
        />
        <div className={styles.bruhDeepMeggings} style={bruhDeepMeggingsStyle}>
          Bruh deep meggings crucifix hoodie pug I'm jianbing hot. Mumblecore
          cold pressed ipsum coffee pug bird synth jean. Cred direct probably
          venmo 90's distillery brunch.
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
