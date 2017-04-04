import React from "react";
import Bulletpoint from "./bulletpoint"

import EssayData from '../shared/data';
export default class Bulletpoints extends React.Component {
        constructor(props) {
            super(props);
            this.state = {showMe: 'none', num: '1', categories: [], name: this.categories[1].name}
        }

    componentDidMount() {
        let api = new EssayData();
        let self = this;
        api.findSpecificTopic('58c1e6d4cf2951873d497e5d').then(data => {
            self.setState({categories: data.data.SubCategories})
        });


    }



list(num) {

            var route;
            if(num == 'main') {
               route = <Bulletpoint product={this.props.count} facts={this.props.main_facts} subfacts={this.props.subcat}/>
            } else if (num !== 'main') {

                route = <Bulletpoint product={this.props.count} facts={this.props.main_facts} subfacts={this.props.subcat} />
            }

            return route
}


    render() {
        return (
            <div className="mid-section">
                <div className="left">
                    <h2>Left</h2>
                    <hr/>
                    <div id="sub-links">

                        <a  href="/#/topic" className="return false;" onClick={() => this.props.setCount('main')}><h3 className="subcategory" id="main">Main</h3></a>
                        {
                            this.props.subcat.map((subcategory, i) =>{
                                return <a onClick={() => this.props.setCount(i)} value={i}><h3>{subcategory.name}</h3></a>
                            })
                        }


                    </div>
                </div>
                <div className="right">

                    <div className="bulletpoints">
                        <h2>The Facts:</h2>
                        <ul id="facts">


{console.log(this.state.categories)}

                            {this.list(0)}








                        </ul>
                    </div>
                </div>

            </div>

        )
    }
};