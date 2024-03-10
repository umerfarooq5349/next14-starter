
import PostCard from '@/components/postcard/postCard';
import styles from './blogPage.module.css'

const getData = async () => {

  let response = await fetch("https://jsonplaceholder.typicode.com/posts")
  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}


const BlogPage = async () => {

  const blogPostCard = await getData();

  return <div className={styles.container}>

    {blogPostCard.map((blogPostCard => (
      <PostCard className={styles.post}
        img='https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600'
        title={blogPostCard.title}
        description={blogPostCard.body}
        date='Monday, 13 Dec,2022'
        id={blogPostCard.id}
        key={blogPostCard.id}>
      </PostCard>
    )))}


  </div>;
};

export default BlogPage;