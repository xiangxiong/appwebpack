'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
// import '../../common';
import logo from './../image/logo.png';
import './index.less';

class Search extends React.Component{

    constructor(){
        super(...arguments);

        this.state ={
            Test:null
        }
    }
    
    loadComponent(){
        import('./test.js').then((Test)=>{
            this.setState({
                Test:Test.default
            })
        })
    }

    render(){
        // const funcA = a();
        const {Test} = this.state;
        return (
            <div className="normal">
                {
                    Test ? <Test/> : null
                }
               {/* {funcA}  */}
               Search Text 
                <img src={logo} onClick={this.loadComponent.bind(this)}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Search/>
    ,document.getElementById('root')
)