import type { NextPage } from "next";
import Image from "next/image";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  className?: string;
  cardIcons: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  cardIcons,
}) => {
  return (
    <div className={[styles.cardIconsParent, className].join(" ")}>
      <Image
        className={styles.cardIcons}
        loading="lazy"
        width={367}
        height={480}
        alt=""
        src={cardIcons}
      />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <h3 className={styles.sustainableYouNext}>
          Sustainable you next kick starter chillwave
        </h3>
        <div className={styles.hipsterIpsumTattooed}>
          Hipster ipsum tattooed brunch Vaporware sartorial sustainable franzen
          post-ironic Messenger poke copper fanny.
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
