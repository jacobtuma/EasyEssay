import React from "react";
import Bulletpoint from "./bulletpoint"

import EssayData from '../shared/data';
export default class Bulletpoints extends React.Component {
        constructor(props) {
            super(props);
            this.state = {showMe: 'none', num: '1', categories: [], facts: [] }
        }

    componentDidMount() {
        let api = new EssayData();
        let self = this;
        api.findSpecificTopic('58c1e6d4cf2951873d497e5d').then(data => {
            self.setState({categories: data.data.SubCategories})
        });


    }

    handleClick(){

    }



list(idNum) {

            let route;
    let factsList = [];
    let titleList = [];
    this.props.subcat.map(subcategory =>{
        factsList.push(subcategory.facts);
        titleList.push(subcategory.name)
    });
            if(idNum == 'main') {

               route = <Bulletpoint
                   product={this.props.count}
                   facts={this.props.main_facts}
                   name="Main Facts"/>

            } else if (idNum !== 'main') {

                route = <Bulletpoint
                    product={this.props.count}
                    facts={factsList[idNum]}
                    name={titleList[idNum]} />
            }

            return route
}





    render() {
        return (
            <div className="mid-section">
                <div className="SubCategories col-md-5">
                    <h2>SubCategories</h2>
                    <hr/>
                    <div id="sub-links">

                        <a className="return false;" onClick={() => this.props.setCount('main')}><h3 className="subcategory" id="main">Main</h3></a>
                        {
                            this.props.subcat.map((subcategory, i) =>{
                                return <a className="subcategory"  onClick={() => this.props.setCount(i)} value={i}><h3>{subcategory.name}</h3></a>
                            })
                        }


                    </div>
                </div>
                <div className="right col-md-7">

                    <div className="bulletpoints">

                        {this.list(this.props.count)}

                    </div>
                </div>

            </div>

        )
    }
};