import { getNote } from "../helper/axios";
import { getToken } from "../utils/userTokens"

const token = getToken("token");
const url = "http://localhost:5000/notes";

const notes = () => {
    console.log(token);
    return getNote(url, `bearer ${token}`)
    .then((response) => {
        console.log(response);
        return response;
    }).catch((err) => {
        throw err;
    });
}

export default notes;