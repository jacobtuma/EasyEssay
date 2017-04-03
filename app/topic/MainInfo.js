import React from "react";

import MelloGreenData from '../shared/data';
import Bulletpoints from "./Bulletpoints"
import TopDetails from "./TopDetails"

export default class MainInfo extends React.Component {

    constructor(props){
        super(props);
        this.state = {topic: [], subcategories: [], Main_Facts: []};
    }

    componentDidMount() {
        let api = new MelloGreenData();
        let self = this;
        api.findSpecificTopic('58c1e6d4cf2951873d497e5d').then(data => {
            self.setState({topic: data.data,
                subcategories: data.data.SubCategories,
                Main_Facts: data.data.Main_Facts})
        });
    }



    render () {
        return (
            <div>


                <div className="content-backdrop col-md-8">

<div className="row">
                       <TopDetails topic={this.state.topic}/>
</div>

                    <hr/>
                <div className="row">
                    <Bulletpoints topic={this.state.topic} subcat={this.state.subcategories} main_facts={this.state.Main_Facts} count={this.state.count} />
                </div>
                </div>

                {/*<div className="sidebar" data-spy="affix" data-offset-top="65">*/}
                    {/*<h2>Sub-Categories</h2>*/}
                    {/*<hr/>*/}


                {/*</div>*/}

            </div>

        )
    }
}

