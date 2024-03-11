'use client'
import { addPost, addUser } from '@/lib/addPostAndUsers';
import styles from './admin.module.css';
// import { addPost } from '@/lib/addPost';
const AddPost = () => {

  // const actionInComponent = async () => {
  //   "use server"
  //   console.log('it still works')
  // }


  return (

    <div className={styles.form}>
      <h1>Add New Post</h1>
      <form action={addPost}>
        <input type="text" name="postTitle" placeholder={'post.postTitle'} />
        <input type="text" name="postBody" placeholder={'post.postBody'} />
        <input type="text" name="img" placeholder={'https://images.pexels.com/photos/16094047/pexels-photo-16094047/free-photo-of-man-using-laptop-wit-chat-gpt.jpeg?auto=compress&cs=tinysrgb&w=600'} />
        <input type="text" name="userId" placeholder={'1'} />
        <input type="text" name="slug" placeholder={'post-post-title'} />
        <button >Add Post</button>
      </form>
      <h1>Add New User</h1>
      <form action={addUser}>
        <input type="text" name="username" placeholder={'Jane'} />
        <input type="text" name="password" placeholder={'12345678'} />
        <input type="text" name="userImage" placeholder={'image'} />
        <input type="text" name="email" placeholder={'example@example.com'} />
        <input type="text" name="uid" placeholder={'1'} />
        <input type="text" name="isAdmin" placeholder={'false'} />

        <button >Add Post</button>
      </form>
    </div>


  );
};

export default AddPost;


