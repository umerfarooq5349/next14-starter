import { Post, User } from "./models";
// Define the function to handle post creation
const addPost = async (postData) => {
  try {
    // Create a new post using the provided data
    const newPost = await Post.create(postData);
    return { success: true, post: newPost };
  } catch (error) {
    console.error("Error adding post:", error);
    return { success: false, error: "Error adding post" };
  }
};

// Export the function
export default addPost;
