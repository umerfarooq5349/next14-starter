
import Image from 'next/image';
import styles from './postCard.module.css'
import Link from 'next/link';

const PostCard = (blogPost) => {
    return (<div className={styles.container}>
        <div className={styles.cardHeader}>
            <div className={styles.cardImage}>
                <Image src={blogPost.img} alt={blogPost.title} fill />
            </div>
            <p>{blogPost.date}</p>
        </div>

        <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
                <h1>{blogPost.title}</h1>
            </div>
            <div className={styles.cardDescription}>
                <p>{blogPost.description}</p>
            </div>
            <Link href={'blog/slug'} className={styles.link}>Read more</Link>
        </div>

    </div>);
};
export default PostCard;