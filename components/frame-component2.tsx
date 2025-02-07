import type { NextPage } from "next";
import FrameComponent from "./frame-component";
import styles from "./frame-component2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.cleanaroHomePageInner, className].join(" ")}>
      <FrameComponent lOGOCLEANARO21="/logo-cleanaro2-1@2x.png" />
    </section>
  );
};

export default FrameComponent2;
