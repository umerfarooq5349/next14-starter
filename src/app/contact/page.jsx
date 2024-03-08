import Image from "next/image";

import styles from './contact.module.css';
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <Image src={'/contact.png'} alt='' fill className={styles.image} />
      </div>
      <div className={styles.form}>
        <input className={styles.inputField} type="text" placeholder="Name" />
        <input className={styles.inputField} type="text" placeholder="Email Address" />
        <input className={styles.inputField} type="number" placeholder="Phone Number" />
        <textarea
          rows='20'
          cols='30'
          className={styles.inputField} type="text" placeholder="Message" />
        <button className={styles.sendBtn}>Send</button>
      </div>

    </div>
  );
};

export default AboutPage;