import axios from "axios";

const AddUsers = (obj) => {
 return  axios
    .post("http://127.0.0.1:3333/api/signup", obj)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
 export default AddUsers;


//  AddUsers();
