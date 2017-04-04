import React from "react";

import EssayData from '../shared/data';
import {Form, Field} from 'simple-react-forms';


export default class DashboardLayout extends React.Component {
    componentDidMount() {

    }

    handleSubmit(){
        let api = new EssayData();
        let form = this.refs['simpleForm']
        if(form.isValid()) {
            let username = form.getFormValues().email;
            let password = form.getFormValues().password;

            api.logIn(username, password)
        }

    }


    render() {
        return (
            <div>



                    <div className="row no-gutter">

<div className="col-md-8 header">
    <div className="row animated fadeInUp ">
        <div className="col-md-3">
            <img className="img-responsive round-img" src="../img/book_icon.png" alt=""/>
        </div>
    <div className="col-md-8">
            <h2 id="macbook-title" className="mac-subtext">Essays Simplified</h2>
        <p className="mac-subtext ">You've found the right place to cut hours off your research.</p>
    </div>
    </div>

</div>
                        <hr/>
                        <div className="col-md-8 header">
                            <div className="row animated fadeInUp ">
                                <div className="col-md-3">
                                    <img className="img-responsive round-img" src="../img/student_icon.png" alt=""/>
                                </div>
                                <div className="col-md-9">
                                    <h2 id="macbook-title" className="mac-subtext animated fadeInUp">Look Legitimate</h2>
                                    <p className="mac-subtext animated fadeInUp ">Don't trust a Wiki? We have your source cited for reference immediately.</p>
                                </div>

                            </div>
                            <br/>
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


        )

    }
}