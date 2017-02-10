import React, { Component } from 'react';
import './App.css';
import './bulma.css'
import {Todo} from './Todo.js'

class App extends Component 
{
    state = 
    {
        num: 1
    }

    OnChange = (e) => 
    {
        this.setState({num: parseInt(e.target.value)});      
    }

    render() 
    {
        var boxs = [];
        for (var i = 1; i <= this.state.num; i++) 
        {
            boxs.push(<Todo />);
        }

        return (

            <div className="App">
                <div className="selectColor">
                    <div className="select" onChange={this.OnChange}>
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>

                <div className="columns">
                        {boxs}
                </div>
            </div>
        );
    }
}

export default App;
