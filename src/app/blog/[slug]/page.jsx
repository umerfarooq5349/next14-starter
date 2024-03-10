
import Image from 'next/image';
import styles from './slug.module.css'

const SinglePagePost = () => {
  return (<div className={styles.container}>
    <div className={styles.cardHeader}>
      <div className={styles.cardImage}>
        <Image src={'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='{blogPost.title}' fill />
      </div>
    </div>
    <div className={styles.cardContent}>
      <div className={styles.cardTitle}>
        <h1>Title</h1>
        <div className={styles.blogInfo}>
          <div className={styles.authorInfo}>
            <Image src={'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600'} alt={''} className={styles.authorImage}
              width={40}
              height={40}
            />
            <p className={styles.authorName}>AbIiR MuGhal</p>
          </div>
          <p className={styles.date}>blogPost.date</p>
        </div>
      </div>
      <div className={styles.cardDescription}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur provident illum, cumque reprehenderit, dicta temporibus iure libero odio aperiam, deserunt necessitatibus velit dolorem blanditiis ipsa quia! Consectetur illo iure ea!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, rerum illo veritatis sit voluptas asperiores porro iste ut quidem pariatur iure eum. Totam id laboriosam quisquam dolorum perferendis sunt aliquid.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deleniti ut ab quisquam accusamus necessitatibus corrupti esse laboriosam, ea ipsa doloribus ipsam amet id voluptas tempora? Dicta tempore earum sint.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum facilis, nulla hic corrupti cum consequatur unde adipisci quis dolor odit minus esse perspiciatis, earum quam a possimus sed autem. Consectetur?
        </p>
      </div>


    </div>

  </div>);
};

export default SinglePagePost;