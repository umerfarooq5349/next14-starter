
import Image from 'next/image';
import styles from './postauthor.module.css';
import { getuser } from '@/lib/data';

// const getUserInfo = async (uid) => {

//     console.log(uid)
//     let response = await fetch(`https://jsonplaceholder.typicode.com/users/${uid}`, { Cache: 'no-store' })
//     if (!response.ok) {
//         throw new Error(response.statusText)
//     }
//     return response.json()
// }

const Postauthor = async ({ uid }) => {
    const id = uid
    const author = await getuser(id);
    console.log("console author: " + author[0].username)
    return (<div>
        <div className={styles.blogInfo}>
            <div className={styles.authorInfo}>
                <Image src={author[0].userImage} alt={author[0].username} className={styles.authorImage}
                    width={40}
                    height={40}
                />
                <div className={styles.authorDetails}>
                    <p className={styles.authorName}>{author[0].username}</p>
                    <p className={styles.authorEmail}>{author[0].email}</p>
                </div>
            </div>

        </div>
    </div>);
};
export default Postauthor;