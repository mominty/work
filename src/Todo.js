import React, { Component, PropTypes} from 'react';

export class Todo extends Component 
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
            boxs.push(<div className="column boxColor is-success has-text-centered">
                        {i}
                      </div>);
        }

        return (
            <div className="column innerBox">
                <div className="select" onChange={this.OnChange}>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>

                <div className="columns App-body">
                        {boxs}
                </div>
            </div>
        );
    }
}

