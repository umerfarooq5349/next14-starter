import Image from "next/image";

import styles from './about.module.css';
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <h3 className={styles.aboutHeading}>About Us</h3>
        <h1 >We create digital ideas that are bigger, bloder, braver and better.</h1>
        <p>We create digital ideas that are bigger, bloder, braver and better.
          We create digital ideas that are bigger, bloder, braver and better.
          We create digital ideas that are bigger, bloder, braver and better.
          We create digital ideas that are bigger, bloder, braver and better.
        </p>
        <div className={styles.projects}>
          <div className={styles.info}>
            <h4 className={styles.projectHeading}>10 K+</h4>
            <p className={styles.projectBody}>Years of experiece </p>
          </div>
          <div className={styles.info}>
            <h4 className={styles.projectHeading}>234 K+</h4>
            <p className={styles.projectBody}>Projects done</p>
          </div>
          <div className={styles.info}>
            <h4 className={styles.projectHeading}>5 K+</h4>
            <p className={styles.projectBody}>Services and plugins</p>
          </div>

        </div>

      </div>
      <div className={styles.imagecontainer}>
        <Image src={'/about.png'} alt='' fill className={styles.image} />
      </div>
    </div>
  );
};

export default AboutPage;