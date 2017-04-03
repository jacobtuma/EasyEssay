import React from "react";
import EssayData from '../shared/data';


export default class DashboardLayout extends React.Component {
    componentDidMount() {
        // let api = new EssayData();
        // let self = this;
        // api.getTopic().then(data => {
        //     self.setState({topic: data.data});
        // });
    }


    render() {
        return (
            <div>
                <h2 className="page-header">Account Login</h2>

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
                </Form>
                <button onClick={this.handleSubmit.bind(this)}>Login</button>

            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>



            <div className="carousel-inner" role="listbox">
            <div className="pic1 item active">
            <h2 id="macbook-title" className="mac-subtext animated infinite slideOutLeft">Build your Strategy.</h2>
        <p className="mac-subtext animated infinite slideOutRight">Simple & Reliable Information for any project</p>
        <a className="ghost-button" href="/#/sales">Get Started!</a>
        <img src="img/macbook.jpg" alt="Chania"/>

        </div>

        <div className="item">
            <img src="img/college.jpg" alt="Chania"/>
        </div>

        <div className="item">
            <img src="img/journal.jpg" alt="Flower"/>
            </div>

            <div className="item">
            <img src="img/pencil.jpg" alt="Flower"/>
            </div>
            </div>


        <a className="left carousel-control"  role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
            </div>




        )

    }
}