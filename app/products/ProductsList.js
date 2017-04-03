import React from "react";

import EssayData from '../shared/data';
import {Form, Field} from 'simple-react-forms';


export default class ProductsList extends React.Component {
    componentDidMount() {

        let self = this;

    }


     codeAddress() {
       let inputtype = 'text';
         document.addEventListener('DOMContentLoaded', function() {
            inputtype = 'password';
         }, false);
         return inputtype
    }


    addAccount(name, username, email, password, password2) {
        let api = new EssayData();

        api.registerAccount(name, username, email, password, password2);
}



        handleSubmit(){
            let form = this.refs['simpleForm']
            if(form.isValid()) {
                let name = form.getFormValues().name;
                let username = form.getFormValues().username;
                let email = form.getFormValues().email;
                let password = form.getFormValues().password;
                let password2 = form.getFormValues().password2;

                this.addAccount(name, username, email, password, password2)
            }

        }


        nameValid(name) {

        }

    validateEmail(email) {
        // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
        console.log(re.test(email))
    }



    render(){
        return (
<div>
    <h2 className="page-header">Register</h2>

         <Form ref='simpleForm'>
             <Field
                 name='name'
                 label='Full Name:'
                 type='text'
                 validators={[
                     'required']}
             />
             <Field
                 name='username'
                 label='Username:'
                 type='text'
                 validators={[
                     'required']}
             />
             <Field
                 name='email'
                 label='Email:'
                 type='text'
                 validators={[
                     'required',
                     (value) => {
                         if (this.validateEmail(value)) {
                             return {valid: true}
                         }
                         else {
                             return {valid: false, error: 'Invalid Email'}
                         }
                     }
                 ]}
             />
             <Field
                 name='password'
                 label='Password:'
                 type= {this.codeAddress()}
                 validators={[
                     'required']}
             />
             <Field
                 name='password2'
                 label='Re-Enter Password:'
                 type='text'

             />
         </Form>
         <button onClick={this.handleSubmit.bind(this)}>Submit</button>



         <h2>========</h2>


        </div>)
    }
}

