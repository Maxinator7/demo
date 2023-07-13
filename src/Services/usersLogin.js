import axios from "axios";
const usersLogin = (obj) => {
  return axios
    .post("http://127.0.0.1:3333/user/login", obj)
    .then(function (response) {
      console.log("token  :  " + response.data["token"]);
    })
    .catch(function (error) {
      console.log(error);
    });
};
export default usersLogin;
