import React from 'react';

class Tooltip extends React.Component{
    
    render(){
        const{ ChangeTooltipPosition,state }=this.props;
        return(
            <div>
                <div className='button' 
                    onMouseOver={ ChangeTooltipPosition } 
                    onMouseOut = { ChangeTooltipPosition }>
                    <div>Hover over!</div>
                </div>
                { state.isVisible && <div className={`tooltip-${state.position} toottip-style`}>{state.position}</div> }
            </div>
        );
    }
}

export default Tooltip;