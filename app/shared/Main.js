import React from "react";
import EssayData from '../shared/data';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {topics: []};
    }

    componentDidMount() {
        let api = new EssayData();
        let self = this;
        api.findSpecificTopic('58c1e6d4cf2951873d497e5d').then(data => {
            self.setState({topic: data.data})
        });
    }



    HiItems(items) {
        console.log(items)
    }

    render () {
        let items = [
            { id: 0, value: 'ruby' },
            { id: 1, value: 'javascript' },
            { id: 2, value: 'lua' },
            { id: 3, value: 'go' },
            { id: 4, value: 'julia' }
        ];

        return (<div>

            <nav className="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-2">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand" href="#"><img className= "logo" src="/img/logo.png" /></a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                        <ul className="nav navbar-nav">
                            <li className={this.props.location.pathname === "/products" ? "active": ""}><a href="#/categories">Categories</a></li>
                            <li className={this.props.location.pathname === "/sales" ? "active": ""}><a href="#/sales">Cookie</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Categories <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    {    this.state.topics.map(topic => {
                                        return <li><a onClick={this.handleClick(topic._id)} href="/#/topic/">{topic.Topic}</a></li>
                                    })}
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">One more separated link</a></li>
                                </ul>
                            </li>
                            <li>  </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container">{this.props.children}</div>

            <div className="col-md-3 sidebar" data-spy="affix" data-offset-top="65">
                <img src="../img/man_icon1.png" alt=""/>
                <hr/>
            </div>

        </div>);
    }
}