import React from "react";

import DistributorsListItem from "./DistributorListItem";

export default class DistributorsList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>
            <div className="row">
     <h2>Distributor's List</h2>
            </div>
            {this.props.distributors.map(distributor => {
                return <DistributorsListItem distributor={distributor}/>;
            })}
        </div>
        );
    }
}