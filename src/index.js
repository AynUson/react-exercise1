//Call all functions inside services and log updated value/s
import {
  updateUser,
  getAllUsers,
  getUserById,
  addUser,
} from "./services/users";

import {
  getPosts,
  getPostsByUser,
  getPostById,
  addPost,
  updatePostTitle,
  updatePostBody,
  updatePost,
  deletePostBy,
  deletePostsByUserId,
} from "./services/posts";

import {
  getCommentById,
  getCommentsByPostId,
  updateCommentBody,
  deleteCommentById,
  addComment,
  getComments,
} from "./services/comments";

console.group("User Services");
// start of user service
updateUser(1, { email: "roger@77.com" });
console.log(getAllUsers());

console.log(getUserById(2));

addUser({
  email: "ayn@77global.biz",
  name: "Ayn Gandhi V. Uson",
  username: "auson",
});

console.log(getAllUsers());

console.groupEnd("User Services");
// end of user service

// start of posts service

console.group("Posts Services");
console.log(getPosts());
console.log(getPostsByUser(2));

console.log(getPostById(2));

addPost({
  userId: 4,
  title: "New Book",
  body: "This is a new book",
});
console.log(getPosts());

updatePostTitle(1, "A new title");
console.log(getPosts());

updatePostBody(1, "A new body too");
console.log(getPosts());

updatePost(2, {
  title: "Updated title",
  body: "Updated body too",
});
console.log(getPosts());

deletePostBy(1);
console.log(getPosts());

deletePostsByUserId(1);
console.log(getPosts());

console.groupEnd("Posts Services");
// end of posts service

// start of comments service

console.group("Comment Services");
console.log(getCommentById(1));

console.log(getCommentsByPostId(2));

updateCommentBody(1, "Test update comment body");
console.log(getCommentById(1));

deleteCommentById(1);
console.log(getCommentById(1));

addComment({
  postId: 1,
  name: "A new comment",
  email: "auson@77global.biz",
  body: "This is my comment",
});

console.log(getComments());

console.log(getCommentById(499001));

console.groupEnd("Comment Services");
// end of comments service
