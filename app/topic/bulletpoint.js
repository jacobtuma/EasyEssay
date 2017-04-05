import React from "react";

export default class Bulletpoint extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div id="bulletpoint" className="row animated fadeInUp">
                <h2>{this.props.name}</h2>
               <ul>
                   {this.props.facts.map(fact => {
                       return <li>{fact}</li>;
                   })}
               </ul>
            </div>
        )
    }
}
