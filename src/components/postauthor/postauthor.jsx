
import Image from 'next/image';
import styles from './postauthor.module.css';

const getUserInfo = async (uid) => {

    console.log(uid)
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${uid}`, { Cache: 'no-store' })
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json()
}

const Postauthor = async ({ authorId }) => {
    const uid = authorId
    console.log("console" + uid)
    const author = await getUserInfo(uid);
    return (<div>
        <div className={styles.blogInfo}>
            <div className={styles.authorInfo}>
                <Image src={'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600'} alt={''} className={styles.authorImage}
                    width={40}
                    height={40}
                />
                <div className={styles.authorDetails}>
                    <p className={styles.authorName}>{author.name}</p>
                    <p className={styles.authorEmail}>{author.email}</p>
                </div>
            </div>
            <p className={styles.date}>Monday, 13 Dec, 2022</p>
        </div>
    </div>);
};
export default Postauthor;