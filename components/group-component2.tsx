import type { NextPage } from "next";
import Image from "next/image";
import GroupComponent1 from "./group-component1";
import styles from "./group-component2.module.css";

export type GroupComponent2Type = {
  className?: string;
};

const GroupComponent2: NextPage<GroupComponent2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <GroupComponent1 group1116605111="/group-1116605111.svg" />
      <GroupComponent1
        groupDivBoxShadow="0px 4px 20px rgba(54, 0, 28, 0.1)"
        rectangleDivBoxShadow="0px 4px 20px rgba(54, 0, 28, 0.1)"
        group1116605111="/group-1116605111.svg"
        bruhDeepMeggingsColor="#0a0a0a"
      />
      <GroupComponent1
        groupDivBoxShadow="unset"
        rectangleDivBoxShadow="unset"
        group1116605111="/group-1116605111.svg"
        bruhDeepMeggingsColor="#535353"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.alexenderMartiniParent}>
          <div className={styles.alexenderMartini}>Alexender Martini</div>
          <div className={styles.ceoXyzCompny}>CEO, XYZ Compny</div>
        </div>
        <Image
          className={styles.frameItem}
          width={40}
          height={40}
          alt=""
          src="/rectangle-15@2x.png"
        />
        <div className={styles.singleMemberQuote}>
          <Image
            className={styles.singleMemberQuoteChild}
            width={148}
            height={28}
            alt=""
            src="/group-1116605111.svg"
          />
          <div className={styles.bruhDeepMeggings}>
            Bruh deep meggings crucifix hoodie pug I'm jianbing hot. Mumblecore
            cold pressed ipsum coffee pug bird synth jean. Cred direct probably
            venmo 90's distillery brunch.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent2;
