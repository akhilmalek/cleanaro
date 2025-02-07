import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "./footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.loremIpsumDolorSitAmetCon}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <div className={styles.footerInfo}>
              <div className={styles.logoContainer}>
                <Image
                  className={styles.logoCleanaro21Icon}
                  width={101}
                  height={52}
                  alt=""
                  src="/logo-cleanaro2-1@2x.png"
                />
                <Image
                  className={styles.logoContainerChild}
                  loading="lazy"
                  width={181}
                  height={20}
                  alt=""
                  src="/group-1116602414.svg"
                />
              </div>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.aboutUsParent}>
                <div className={styles.aboutUs}>About us</div>
                <div className={styles.aboutUs}>Contact us</div>
                <a className={styles.privacyPolicy}>{`Privacy policy `}</a>
              </div>
              <div className={styles.aboutUsParent}>
                <a className={styles.faq}>FAQ</a>
                <div className={styles.aboutUs}>Pricing</div>
                <a className={styles.privacyPolicy}>{`Terms & conditions`}</a>
              </div>
            </div>
            <div className={styles.newsletter}>
              <div className={styles.newsletterContent}>
                <div className={styles.aboutUs}>Join our Newsletter</div>
                <div className={styles.keepUpTo}>
                  Keep up to date with everything
                </div>
              </div>
              <div className={styles.emailInput}>
                <Form className={styles.inputField}>
                  <Form.Control type="text" />
                </Form>
                <Button className={styles.statesecondary} variant="primary" />
              </div>
            </div>
          </div>
          <div className={styles.footerSeparator} />
        </div>
        <div className={styles.copyright}>
          <div className={styles.allRightsReservedContainer}>
            © 2024 | A
            <span className={styles.llRightsReserved}>LL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
