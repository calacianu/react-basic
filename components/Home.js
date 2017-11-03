import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            homeLink: props.initialHomeLink
        }
    }

    render() {
        return(
            <div>
                <p>{this.props.name}, age: {this.state.age}</p>
                <h4>Hobbies</h4>
                <ul>
                    {this.props.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                </ul>
                <button onClick={this.onIncrease.bind(this)} className="btn btn-primary">+</button>&nbsp;<button onClick={() => this.onDecrease()} className="btn btn-primary">&nbsp;-&nbsp;</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
                {/* <button onClick={() => this.onChangeLinkName()} className="btn btn-primary">Change link</button> */}
            </div>
        );
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
        this.props.changeLink(this.state.homeLink);
    }

    onChangeLinkName() {
        this.props.changeLink(this.state.homeLink);
    }

    onIncrease() {
        this.setState({
            age: this.state.age + 3
        });
    }  
    
    onDecrease() {
        this.setState({
            age: this.state.age - 3
        });
    }     


}

Home.propTypes = {
    hobbies: PropTypes.array,
    greet: PropTypes.func,
    initialHomeLink: PropTypes.string
};