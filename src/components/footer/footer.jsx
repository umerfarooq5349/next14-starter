import styles from './footer.module.css'

const Footer = () => {
  return (<div className={styles.container}>

    <div className={styles.logo}>LamaDev</div>
    <div className='styles.text'>
      <p>Lama creative thoughts agency</p>
      <p>All rights reseved under the Apache License, Version 2.0</p>
    </div>

  </div>
  );
};
export default Footer;