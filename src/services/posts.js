import { posts as data } from "../data/posts";
import { generateId } from "../utils";

//private
let posts = [...data];

export function getPosts() {
  return [...posts];
}

export function getPostsByUser(userId) {
  return posts.find((user) => user.userId === userId);
}

export function getPostById(id) {
  return posts.find((post) => post.id === id);
}

export function addPost(post) {
  //add new post to BEGINNING of posts array
  // use generateId function and pass posts array as the argument to generate a unique id.
  const id = generateId(posts);
  const pTemp = { id: id, ...post };
  posts.unshift(pTemp);
}

export function updatePostTitle(id, title) {
  //update post title
  posts = posts.map((post) => {
    if (post.id === id) {
      post.title = title;
      return post;
    }
    return post;
  });
}

export function updatePostBody(id, body) {
  //update post body
  posts = posts.map((post) => {
    if (post.id === id) {
      post.body = body;
      return post;
    }
    return post;
  });
}

export function updatePost(id, post) {
  //update post title and or body (imagine a form where user is allowed to edit both title and post but may also choose to only edit one of them)
  posts = posts.map((pTemp) => {
    if (pTemp.id === id) {
      return {
        ...pTemp,
        ...post,
      };
    }

    return pTemp;
  });
}

export function deletePostBy(id) {
  posts = posts.filter((post) => post.id !== id);
  //delete post by id
}

export function deletePostsByUserId(userId) {
  posts = posts.filter((post) => post.userId !== userId);
}
