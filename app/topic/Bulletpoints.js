import React from "react";
import Bulletpoint from "./bulletpoint"

export default class Bulletpoints extends React.Component {
        constructor(props) {
            super(props);
            this.state = {showMe: 'none', num: '1', Main_Facts: []}
        }



    componentDidMount() {


    }

list(num) {
            var route;
            if(num == 'main') {
               route = <Bulletpoint product={this.props.count} facts={this.props.main_facts}/>
            } else if (num !== 'main') {
               route= <Bulletpoint product={this.props.count} facts={this.props.main_facts}/>
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

                        <a  href="/#/topic" className="return false;" value="none"><h3 className="subcategory" id="main">Main</h3></a>
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





                            {this.list(1)}








                        </ul>
                    </div>
                </div>

            </div>

        )
    }
};