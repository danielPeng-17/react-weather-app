import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <div className="headerBox">
                <h4 className="header">The weather in {this.props.city} is </h4>
            </div>
        );
    }
}

export default Header;