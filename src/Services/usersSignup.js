import axios from "axios";

const usersSignup = (obj) => {
  return axios
    .post("http://127.0.0.1:3333/user/store", obj)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
export default usersSignup;
