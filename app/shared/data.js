import axios from "axios";


export default class EssayData {
    constructor(){

    }

     listTopics() {
        return axios.get("api/topics")
}

    registerAccount(name, username, email, password, password2) {

        return axios.post('api/users/register', {
                name: name,
                username: username,
                email: email,
                password: password,
                password2: password2
            })

        }


        logIn(){
            axios.post('api/users/login/');
        }



    findSpecificTopic(idNum) {
        return axios.get("api/topics/topic/" + idNum );
    }

    findCategory(category){
        return axios.get("api/topics/category/" + category );
    }




}