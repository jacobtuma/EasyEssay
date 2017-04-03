import React from "react";

import EssayData from '../shared/data';
import {Form, Field} from 'simple-react-forms';


export default class DashboardLayout extends React.Component {
    componentDidMount() {

    }

    handleSubmit(){
        let form = this.refs['simpleForm']
        if(form.isValid()) {
            let name = form.getFormValues().username;
            let username = form.getFormValues().password;

            this.addAccount(username, password)
        }

    }


    render() {
        return (
            <div>


                <div className="container-fluid">
                    <div className="row">
<div className="header" >

            <h2 id="macbook-title" className="mac-subtext animated fadeInUp">Build your Strategy.</h2>
        <p className="mac-subtext animated fadeInUp ">Simple & Reliable Information for any project</p>
        <a className="ghost-button" href="/#/topic">Get Started!</a>

                    </div>

            </div>




                    <h2 className="page-header">Account Login</h2>

                    <Form ref='simpleForm'>
                        <Field
                            name='username'
                            label='Username:'
                            type='text'
                            validators={[
                                'required']}
                        />
                        <Field
                            name='password'
                            label='Password:'
                            type='text'
                            validators={[
                                'required']}
                        />
                    </Form>
                    <button onClick={this.handleSubmit.bind(this)}>Login</button>
                </div>
                </div>


        )

    }
}