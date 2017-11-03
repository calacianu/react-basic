import React from 'react';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            homeLink: "Home"
        };
    }

    onGreet() {
        alert('Hello');
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    render() {
       var hobbies = ["Football", "Programming", "Music"];
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offest-1">
                        <h1>{this.state.homeLink}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offest-1">
                        <Header homeLink="Home"/>
                        <Home hobbies={hobbies} name={"Cristi"} initialAge={27} greet={this.onGreet} changeLink={this.onChangeLinkName.bind(this)} initialHomeLink={this.state.homeLink}/>
                    </div>
                </div>            
            </div>
        );
   }
}

export default App;