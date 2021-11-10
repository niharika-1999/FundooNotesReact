import axios from "axios";

const userService = (method, url, infos) => {
  axios({
    method: method,
    url: url,
    data: infos,
    headers: { "Content-type":"application/json" },
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default userService;