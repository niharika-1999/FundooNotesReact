import { Url } from "../config/Url";
import {userConnect} from "../helper/axios";

const userPost = (url, data) => {
  userConnect("post",`${Url}/${url}`,data );
}
export default userPost;