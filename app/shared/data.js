import axios from "axios";
import passport from "passport"
import LocalStrategy from 'passport-local'
import querystring from 'querystring';


export default class MelloGreenData {
    constructor(){

    }

    getDistributors() {
        return axios.get("/api/distributors");
    }

    getTotalSalesThisWeek(){
        return axios.get("/api/sales/this-week/total");
    }

    getTotalSalesThisWeekByProduct(){
        return axios.get("/api/sales/this-week/by-product");
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
            axios.post('api/users/login');
        }



    findSpecificTopic(idNum) {
        return axios.get("api/topics/" + idNum );
    }





}