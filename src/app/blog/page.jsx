
import PostCard from '@/components/postcard/postCard';
import styles from './blogPage.module.css'
import { getPosts } from '@/lib/data';

// const getData = async () => {

//   let response = await fetch("https://jsonplaceholder.typicode.com/posts")
//   if (!response.ok) {
//     throw new Error(response.statusText)
//   }

//   return response.json()
// }


const BlogPage = async () => {

  const blogPostCard = await getPosts();

  console.log("console: " + blogPostCard.userId)
  return <div className={styles.container}>
    {blogPostCard.map((blogPostCard => (
      <PostCard className={styles.post}
        img={blogPostCard.img}
        title={blogPostCard.postTitle}
        description={blogPostCard.postBody}
        // Make sure to use the correct field for date
        date={blogPostCard.timeStamps.toString()}

        id={blogPostCard.userId}
        slug={blogPostCard.slug}
        key={blogPostCard.userId}>
      </PostCard>

    )))}


  </div>;
};

export default BlogPage;