'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import logo from './../image/logo.png';
import './index.less';

class Search extends React.Component{
    render(){
        return (
            <div className="normal">
                Search Text 
                <img src={logo}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Search/>
    ,document.getElementById('root')
)