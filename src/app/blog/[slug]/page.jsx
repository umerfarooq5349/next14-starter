


import styles from './slug.module.css'
import Postauthor from '@/components/postauthor/postauthor';

import { getPost } from '@/lib/data';
import Image from 'next/image';
import { Suspense } from 'react';




// const getData = async (slug) => {

//   console.log(slug)
//   let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//   if (!response.ok) {
//     throw new Error(response.statusText)
//   }
//   return response.json()
// }

const SinglePagePost = async ({ params }) => {
  const { slug } = params

  const singleblog = await getPost(slug);



  // console.log(singleblog[0].timeStamps.toString().slice(4, 16));

  return (<div className={styles.container}>

    <div className={styles.cardHeader}>
      <div className={styles.cardImage}>
        <Image src={singleblog[0].img} alt={singleblog[0].postTitle} fill />
      </div>
    </div>
    <div className={styles.cardContent}>
      <div className={styles.cardTitle}>
        <h1>{singleblog[0].postTitle}</h1>
        <div className={styles.authInfo}>
          <Suspense fallback={<div> loading....</div>} >
            <Postauthor uid={singleblog[0].userId} />
          </Suspense>
          <p className={styles.date}>{singleblog[0].timeStamps.toString().slice(4, 16)}</p>
        </div>
      </div>
      <div className={styles.cardDescription}>
        <p>{singleblog[0].postBody}
        </p>
      </div>


    </div>

  </div>);
};

export default SinglePagePost;