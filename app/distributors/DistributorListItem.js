import React from "react";

export default class DistributorsListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="row">
            <h2>Distributor List Item</h2>
            <div className="col-sm-6">
                {this.props.distributor.Topic}
            </div>
            <div className="col-sm-3">
                {this.props.distributor.Category}
            </div>
            <div className="col-sm-1">
                {this.props.distributor.state}
            </div>
        </div>
        );
    }
}
