import React, {Component} from 'react';
import spinner from '../images/spinner.svg';

class Spinner extends Component{
    render(){
        return(
            <div className="loading">
                <img src={spinner} alt="loading icon" className="spinner"/>
                <h1>Loading...</h1>
            </div>
        );
    }
}

export default Spinner