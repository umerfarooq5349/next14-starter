import { connectToDb } from "./utils";
import { Post, User } from "./models";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    console.log(posts);
    return posts;
  } catch (e) {
    console.log(e);
    throw new Error(`Error fetching the posts`);
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const posts = await Post.find({ slug });
    return posts;
  } catch (e) {
    console.log(e);
    throw new Error(`Error fetching the Post`);
  }
};

export const getuser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (e) {
    console.log(e);
    throw new Error(`Error fetching the user`);
  }
};

export const getusers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (e) {
    console.log(e);
    throw new Error(`Error fetching the users`);
  }
};
