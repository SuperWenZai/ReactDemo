import React from 'react';
import './Component1.less'
import {BrowserRouter as Router, Route, hashHistory} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Component2 from './Component2.jsx'
import Component3 from './Component3.jsx'

class Component1 extends React.Component {
    render() {
        return (
            <div className="app">
                <Component2 name="nameWen">
                    <span>hello</span>
                    <span>world</span>
                </Component2>
                    <div>
                        <NavLink to='/Component3'>
                            Jspanga
                        </NavLink>
                    </div>
            </div>
        )
    }
}

export default Component1;