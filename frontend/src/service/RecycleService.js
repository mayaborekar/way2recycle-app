import axios from "axios";

class RecycleService{
    executeLoginService(user){
       return axios.post(`http://localhost:8080/recycle/login`, user);
    }
    executeSignUpService(user){
        return axios.post(`http://localhost:8080/recycle/signup`, user);
     }
     executeCreateRecycleRequestService(recycleRequest){
        return axios.post(`http://localhost:8080/recycle/createRecycleRequest`, recycleRequest);
     } 
     getAllRecycleRequestDetails(){
         return axios.get(`http://localhost:8080/recycle/getAllRecycleRequestDetails`);
      }
      validateForgotPassword(user){
         return axios.post(`http://localhost:8080/recycle/validateForgotPassword`, user);
      }
      changePassword(user){
         return axios.post(`http://localhost:8080/recycle/changePassword`, user);
      }
}

export default new RecycleService