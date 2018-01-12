import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Component3 from './Component3.jsx'
class Component2 extends React.Component {

    constructor(props) {
        super(props);

        console.log(props.name)

        this.state = {
            isHide : true,
            name : props.name,
            value : "Hello!"
        }

        this.go = this.go.bind(this);
        this.onChgo = this.onChgo.bind(this);
    }
 
    go(){
        this.setState({
            isHide: !this.state.isHide
        })

        console.log(this.state.isHide)
    }

    onChgo(e){
        this.setState({
            value : e.target.value
        })
    }

    render() {
        return (
            <div className="main" onClick={this.go} ref="what"> 
                {
                    React.Children.map(this.props.children,child => {
                        return (
                            <p>{child}</p>
                        )
                    })
                }

                <input type="text" value={this.state.value} onChange={this.onChgo}/>

                <p>{this.state.value}</p>
            </div>
        ) 
    }
    
}
 
export default Component2;