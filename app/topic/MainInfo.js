import React from "react";

import EssayData from '../shared/data';
import Bulletpoints from "./Bulletpoints"
import TopDetails from "./TopDetails"

export default class MainInfo extends React.Component {

    constructor(props){
        super(props);
        this.state = {topic: [], subcategories: [], Main_Facts: [], count: 'main', facts: [], image: null};

    }


    componentDidMount() {
        let api = new EssayData();
        let self = this;
        let path = this.props.location.pathname.split("/topic/").pop();
        api.findSpecificTopic(path).then(data => {
            self.setState({topic: data.data,
                subcategories: data.data.SubCategories,
                Main_Facts: data.data.Main_Facts,
            image: data.data.Image})
        });

    }


    setCount(num) {
        $('#bulletpoint').toggleClass('fadeInUp2');

let self = this;
        switch (num) {
            case 'main':
                self.setState({count: 'main'});
                break;
            case 0:
                self.setState({count: 0});
                break;
            case 1:
                self.setState({count: 1});
                break;
            case 2:
                self.setState({count: 2});
                break;
            case 3:
                self.setState({count: 3});
                break;
            case 4:
                self.setState({count: 4});
                break;
        }
    }



    render () {
        return (
            <div>


                <div className="content-backdrop col-md-8">

<div className="row">
                       <TopDetails topic={this.state.topic} image={this.state.image}/>
</div>

                    <hr/>
                <div className="row">
                    <Bulletpoints
                        topic={this.state.topic}
                        subcat={this.state.subcategories}
                        main_facts={this.state.Main_Facts}
                        setCount={(e) => this.setCount(e)} setFacts={(e) => this.setFacts(e)}
                        count={this.state.count} />
                </div>
                </div>
            </div>

        )
    }
}

