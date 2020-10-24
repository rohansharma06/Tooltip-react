import React, { Component } from 'react';
import Tooltip from './Tooltip';

class SelectMenu extends Component {
    constructor(props){
        super(props);
        this.state={
            isVisible : false,
            position :"top"
        }
    }

    ChangeTooltipPosition = () => {
        const {isVisible}=this.state;
        const pos=document.getElementById("drop-down").value;
        this.setState({
            isVisible:!isVisible,
            position:pos
        });
    }
    render() {
        return (
            <div className='center'>
                <select id="drop-down">
                    <option value="top">TOP</option>
                    <option value="right">RIGHT</option>
                    <option value="bottom">BOTTOM</option>
                    <option value="left">LEFT</option>
                </select>
                < Tooltip ChangeTooltipPosition={this.ChangeTooltipPosition} state={this.state}/>
            </div> 
        );
    }
}

export default SelectMenu;