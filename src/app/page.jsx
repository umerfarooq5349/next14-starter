import Image from 'next/image';
import styles from './home.module.css'
const Home = () => {

  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <h1>Creative Thoughts Agency.</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, explicabo repudiandae repellat sit dicta harum doloribus quidem doloremque quam aliquid possimus cum vitae quasi voluptatibus accusantium porro at vero a.</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brand}>
          <Image src={'/brands.png'} alt='' fill className={styles.brandImage} />
        </div>
      </div>
      <div className={styles.imagecontainer}>
        <Image src={'/hero.gif'} alt='' fill className={styles.image} />
      </div>
    </div>
  );
};

export default Home;