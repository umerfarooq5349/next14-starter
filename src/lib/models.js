import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 30,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 30,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  userImage: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  timeStamps: {
    type: Date,
    default: Date.now,
  },
});

const postSchema = new Schema({
  postTitle: {
    type: String,
    required: true,

    minlength: 3,
  },
  postBody: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
  },
  timeStamps: {
    type: Date,
    default: Date.now,
  },
});

// Check if models already exist before defining
const User = mongoose.models.User || model("User", userSchema);
const Post = mongoose.models.Post || model("Post", postSchema);

export { User, Post };
