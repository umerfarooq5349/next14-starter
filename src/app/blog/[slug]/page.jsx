

import Image from 'next/image';
import styles from './slug.module.css'
import Postauthor from '@/components/postauthor/postauthor';
import { Suspense } from 'react';




const getData = async (slug) => {

  console.log(slug)
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json()
}

const SinglePagePost = async ({ params }) => {
  const { slug } = params

  const singleblog = await getData(slug);

  return (<div className={styles.container}>

    <div className={styles.cardHeader}>
      <div className={styles.cardImage}>
        <Image src={'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600'} alt='{blogPost.title}' fill />
      </div>
    </div>
    <div className={styles.cardContent}>
      <div className={styles.cardTitle}>
        <h1>{singleblog.title}</h1>
        <Suspense fallback={<div> loading....</div>} >
          <Postauthor authorId={singleblog.userId} />

        </Suspense>

      </div>
      <div className={styles.cardDescription}>
        <p>{singleblog.body}
        </p>
      </div>


    </div>

  </div>);
};

export default SinglePagePost;