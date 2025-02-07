import type { NextPage } from "next";
import Image from "next/image";
import Component1 from "./component1";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <code className={[styles.parent, className].join(" ")}>
      <Component1 />
      <Image
        className={styles.videoIcon}
        loading="lazy"
        width={80}
        height={80}
        alt=""
        src="/video-icon1.svg"
      />
    </code>
  );
};

export default GroupComponent;