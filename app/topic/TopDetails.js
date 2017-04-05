import React from "react";

export default class TopDetails extends React.Component {
    render() {
        return (
            <div>

                <div className="row details ">
                    <div className="col-md-3">
                    <img className="top-img"
                         src={this.props.image}
                         alt=""/>
                </div>
                    <div className="col-md-9 info-right">
                        <h2 className="title">{this.props.topic.Topic}</h2>
                        <h3>{this.props.topic.Category} </h3>
                        <hr/>
                        <p className="description">{this.props.topic.Description}</p>
                        <br/><br/><br/><br/>
                    </div>
                </div>

            </div>
        )
    }
            }