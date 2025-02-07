import type { NextPage } from "next";
import Image from "next/image";
import styles from "./Cards.module.css";

export type CardsType = {
  className?: string;
  cards: string;
};

const Cards: NextPage<CardsType> = ({ className = "", cards }) => {
  return (
    <div className={[styles.cardIconsParent, className].join(" ")}>
      <Image
        className={styles.cardIcons}
        loading="lazy"
        width={367}
        height={480}
        alt=""
        src={cards}
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

export default Cards;
