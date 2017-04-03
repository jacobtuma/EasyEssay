import React from "react";



export default class TestList extends React.Component {
    render () {
        return (
            <div>


                <div className="content-backdrop">
                    <div className="info-header">
                        <i className="fa fa-globe globe" aria-hidden="true"></i>
                        <h2 className="category" >World Issues</h2>
                    </div>



                    <div className="details">
                        <img className="top-img" src="http://c8.alamy.com/comp/A6W8FT/earth-globe-with-flames-symbol-for-global-warming-climate-change-A6W8FT.jpg" alt=""/>
                            <div className="info-right">
                                <h2 className="title"></h2>
                                <h3>Placeholder </h3>
                                <hr/>
                                    <p className="description"> </p>
                                    <br/><br/><br/><br/>
                            </div>
                    </div>
                    <hr/>


                </div>

                <div className="sidebar" data-spy="affix" data-offset-top="65">
                    <h2>Sub-Categories</h2>
                    <hr/>


                </div>

            </div>

        )
    }
}

