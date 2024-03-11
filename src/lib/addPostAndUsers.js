"use server";

import { Post, User } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formdata) => {
  const { postTitle, postBody, img, userId, slug } =
    Object.fromEntries(formdata);
  try {
    connectToDb();
    const newPost = new Post({
      postTitle,
      postBody,
      img,
      userId,
      slug,
    });
    console.log("newPost: " + newPost);
    await newPost.save();
    console.log("saved: " + newPost);
  } catch (error) {
    console.log(error);
    return "something went wrong";
  }
};

export const addUser = async (userFormData) => {
  const { username, password, email, uid, userImage, isAdmin } =
    Object.fromEntries(userFormData);
  try {
    connectToDb();
    const newUser = new User({
      username,
      password,
      email,
      uid,
      userImage,
      isAdmin,
    });
    console.log("newUser: " + newUser);
    await newUser.save();
    console.log("saved: " + newUser);
  } catch (error) {
    console.log(error);
    return "something went wrong";
  }
};
