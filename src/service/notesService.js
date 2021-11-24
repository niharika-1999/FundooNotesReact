import { getNote,createNotes,updateNotes,deleteNotes } from "../helper/axios";
import { getToken } from "../utils/userTokens"

const token = getToken("token");

const notes = () => {
let url = "http://localhost:5000/notes";

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
let url = "http://localhost:5000/notes";

    return createNotes(url,data,`bearer ${token}`);
}

const update = (data,id) => {
   let url=`http://localhost:5000/notes/${id}`
    return updateNotes(url, data, `bearer ${token}`).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    })
}

const Delete=(id)=>{
    let url=`http://localhost:5000/notes/${id}`
    return deleteNotes(url, `bearer ${token}`).then((response) => {
        return response;
    }).catch((err) => {
        throw err;
    })
}

export {notes, createNewNotes,update,Delete};