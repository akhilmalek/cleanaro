import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent1 from "../components/frame-component1";
import GroupComponent2 from "../components/group-component2";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent8 from "../components/frame-component8";
import Footer from "../components/footer";
import styles from "./index.module.css";

const CleanaroHomePage: NextPage = () => {
  return (
    <div className={styles.cleanaroHomePage}>
      <Image
        className={styles.videoIcon}
        width={60}
        height={60}
        alt=""
        src="/video-icon.svg"
      />
      <FrameComponent2 />
      <FrameComponent3 />
      <FrameComponent4 />
      <FrameComponent5 />
      <FrameComponent6 />
      <section className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <FrameComponent1 />
          <GroupComponent2 />
        </div>
        <div className={styles.frameWrapper}>
          <Image
            className={styles.frameChild}
            loading="lazy"
            width={100}
            height={40}
            alt=""
            src="/group-1116605116.svg"
          />
        </div>
      </section>
      <FrameComponent7 />
      <FrameComponent8 />
      <Footer />
    </div>
  );
};

export default CleanaroHomePage;
