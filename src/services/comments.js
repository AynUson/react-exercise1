import { comments as data } from "../data/comments";
import { generateId } from "../utils";

//private
let comments = [...data];

export function getComments() {
  return [...comments];
}
export function getCommentById(id) {
  //get comment by id
  const comment = comments.find((comment) => comment.id === id);
  if (comment === undefined) {
    return "Comment not found";
  }
  return comment;
}

export function getCommentsByPostId(postId) {
  //get comments by post id
  return comments.find((comment) => comment.postId === postId);
}

export function updateCommentBody(id, body) {
  //update comment body
  comments = comments.map((comment) => {
    if (comment.id === id) {
      comment.body = body;
      return comment;
    }
    return comment;
  });
}

export function deleteCommentById(id) {
  //delete comment by id
  comments = comments.filter((comment) => comment.id !== id);
}

export function addComment(comment) {
  //add comment to comments array
  // use generateId function and pass comments array as the argument to generate a unique id.
  const id = generateId(comments);
  const cTemp = { id: id, ...comment };
  console.log(cTemp);
  comments.push(cTemp);
}
