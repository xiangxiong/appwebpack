'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
// import '../../common';
import logo from './../image/logo.png';
import './index.less';
import {a} from './tree-shaking';

class Search extends React.Component{
    render(){
        const funcA = a();
        return (
            <div className="normal">
               {funcA} Search Text 
                <img src={logo}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Search/>
    ,document.getElementById('root')
)