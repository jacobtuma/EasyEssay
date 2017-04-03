import React from "react";
import Bulletpoint from "./bulletpoint"

export default class Bulletpoints extends React.Component {
        constructor(props) {
            super(props);
            this.state = {showMe: 'none', num: '0'}
        }


         handleClick(value) {
            console.log("HERE " + value);
            this.state.showMe = value;
            this.changeArticle();
         }

         changeArticle(){
             if (this.state.showMe == '0') {
                 return (<div>worked</div>);
             } else if (this.state.showMe  == '1'){
                 return (<div>worked2</div>);
             } else if (this.state.showMe  == 'none'){
                 return (<div>nothing yet..</div>);
             }
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
                                return <a onClick={() => this.handleClick(i)} value={i}><h3>{subcategory.name}</h3></a>
                            })
                        }


                    </div>
                </div>
                <div className="right">

                    <div className="bulletpoints">
                        <h2>The Facts:</h2>
                        <ul id="facts">


                            {this.changeArticle()}

                            {/*{  this.props.main_facts.map(subcategory => {*/}
                                {/*return <li><h3>{subcategory}</h3></li>;*/}

                            {/*})}*/}

                            {/*{ console.log(this.props.main_facts[2])}*/}



                        </ul>
                    </div>
                </div>

            </div>

        )
    }
};