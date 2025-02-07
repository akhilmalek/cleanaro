import type { NextPage } from "next";
import styles from "./component1.module.css";

export type Component1Type = {
  className?: string;
};

const Component1: NextPage<Component1Type> = ({ className = "" }) => {
  return <div className={[styles.div, className].join(" ")} />;
};

export default Component1;
