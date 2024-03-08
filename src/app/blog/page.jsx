
import PostCard from '@/components/postcard/postCard';
import styles from './blogPage.module.css'

const blogPostCard = [
  {
    img: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Glasses on Laptop',
    description: 'long description',
    date: '6/12/2023',
  }, {
    img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Moble on Laptop',
    description: 'long description',
    date: '6/2/2024',
  }
  , {
    img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Mobe on Laptop',
    description: 'long description',
    date: '6/2/2024',
  }

  , {
    img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Mobile on Laptop',
    description: 'long description',
    date: '6/2/2024',
  }
  , {
    img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Mobile on Laptop',
    description: 'long description',
    date: '6/2/2024',
  }, {
    img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Mobile on Laptop',
    description: 'long description',
    date: '6/2/2024',
  }, {
    img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Mobile on Laptop',
    description: 'long description',
    date: '6/2/2024',
  }
]

const BlogPage = () => {

  return <div className={styles.container}>

    {blogPostCard.map((blogPostCard => (
      <PostCard className={styles.post}
        img={blogPostCard.img}
        title={blogPostCard.title}
        description={blogPostCard.description}
        date={blogPostCard.date}
        key={blogPostCard.title}>
      </PostCard>
    )))}


  </div>;
};

export default BlogPage;