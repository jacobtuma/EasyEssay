import React from "react";

export default class Bulletpoint extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {


    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-6">
                    {this.props.product}
                </div>
               <ul>
                   {this.props.facts.map(fact => {
                       return <li>{fact}</li>;
                   })}
               </ul>
            </div>
        )
    }
}
