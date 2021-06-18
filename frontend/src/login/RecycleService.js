import axios from "axios"
class RecycleService{
    executeLoginService(data){
        console.log("In RecycleSevice(Login)"+data);
        var name="Testing";
        
       // return axios.get('http://localhost:8080/hello-world/'+'${data}');

       return axios.post(`http://localhost:8080/recycle`, data);

    }
    

}

export default new RecycleService()