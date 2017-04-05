import React from "react";

import EssayData from '../shared/data';
import {Form, Field} from 'simple-react-forms';


export default class Categories extends React.Component {
    componentDidMount() {


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


        <div className="row animated fadeInUp ">
            <div className="col-md-8 header">
            <div className="col-md-3">
                <img className="img-responsive round-img" src="../img/globe_icon.png" alt=""/>
            </div>
            <div className="col-md-9">
                <h2 id="macbook-title" className="mac-subtext animated fadeInUp">World Issues</h2>
                <ul>
                    <a href="/#/topic/58bf0e632bcc28a8c2b5109b"><li>Global Warming</li> </a>
                    <a href="/#/topic/58c1e6d4cf2951873d497e5d"><li>World Hunger</li></a>
                </ul>
            </div>
        </div>
        <br/>
    </div>
    <hr/>
        <div className="row animated fadeInUp ">
            <div className="col-md-8 header">
            <div className="col-md-3">
                <img className="img-responsive round-img" src="../img/ufo_icon.png" alt=""/>
            </div>
            <div className="col-md-9">
                <h2 id="macbook-title" className="mac-subtext animated fadeInUp">Alien Evidence</h2>

            </div>

        </div>
    </div>
    <hr/>
    <div className="row animated fadeInUp ">
        <div className="col-md-8 header">
            <div className="col-md-3">
                <img className="img-responsive round-img" src="../img/pencil_icon.png" alt=""/>
            </div>
            <div className="col-md-9">
                <a href=""><h2 id="macbook-title" className="mac-subtext animated fadeInUp">Classic Topics</h2></a>
                <ul>
                    <li>Should students be allowed to grade their teachers?</li>
                    <li>Are actors and professional athletes paid too much?</li>
                    <li> Should teachers have to wear uniforms or have a dress code?</li>
                </ul>
            </div>
        </div>
        <br/>
    </div>
    <hr/>
    <div className="row animated fadeInUp ">
        <div className="col-md-8 header">
            <div className="col-md-3">
                <img className="img-responsive round-img" src="../img/backpack_icon.png" alt=""/>
            </div>
            <div className="col-md-9">
                <h2 id="macbook-title" className="mac-subtext animated fadeInUp">Travel</h2>
            </div>

        </div>
    </div>



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

