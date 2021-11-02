import userService from "../helper/axios";

const userPost = (url, data) => {
  userService("post",`http://localhost:5000/${url}`,data );
}
export default userPost;