import React, { Component } from 'react';

class Hello extends Component {
    render(props) 
    
    {
       console.log(this.props);
        return (
            <>
                <div>
                    <p>{this.props.post}</p>
                </div>
                <div>
                    {this.props.children}
                </div>
            
            </>
        );
    }
}

export default Hello;