import { getNote,createNotes,updateNotes } from "../helper/axios";
import { getToken } from "../utils/userTokens"

const token = getToken("token");
let url = "http://localhost:5000/notes";

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

const createNewNotes = (data) => {
    return createNotes(url,data,`bearer ${token}`);
}

const update = (data,id) => {
    url=`http://localhost:5000/notes/${id}`
    return updateNotes(url, data, `bearer ${token}`).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    })
}

export {notes, createNewNotes,update};