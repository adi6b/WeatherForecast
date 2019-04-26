import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = { 'term' : ''};
        
        // returning the bounded instance of onInputChange 
        //will bind the onInputChange function with the instance of SearchBar(this) the component
        //overriding the local method of onInputChange with new bounded instance
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        // this here refers to the instance of SearchBar 
        // gets an TypeError: Cannot read property 'setState' of undefined at onInputChange if not binded
        //because is doesnt find setState method, as "this" is not the actual component of SearchBar 
        this.setState({term : event.target.value});
    }

    onFormSubmit(event){
        // prevents from submitting the form on clicking enter or submit button
        event.preventDefault();
        //calling the action creator
        this.props.fetchWeather(this.state.term);
        // clearing out the input after search
        this.setState({term : ''});
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className = "input-group">
                <input 
                    placeholder = "Get a five-day forecast in your favorite cities"
                    className = "form-control"
                    value = {this.state.term}
                    onChange = {this.onInputChange}
                
                />
                <span className = "input-group-btn">
                    <button type = "submit" className = "btn btn-secondary">Submit </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){

    return bindActionCreators({ fetchWeather },dispatch);
}

// null because this component does not care about the redux state
export default connect(null, mapDispatchToProps)(SearchBar);
