import React from "react";

import EssayData from '../shared/data';
import DashboardLayout from "./DashboardLayout";

export default class DashboardContainer extends React.Component {
    constructor(props){
        super(props);
        // this.state = {distributors: []};
    }

    componentDidMount() {
        let api = new EssayData();
        let self = this;
        // api.getDistributors().then(data => {
        //     self.setState({distributors: data.data});
        //     console.log(data);
        // });
    }

    render(){
        return(
            <DashboardLayout />
        );
    }
}