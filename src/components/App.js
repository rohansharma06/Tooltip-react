import React from 'react';
import SelectMenu from './SelectMenu';


class App extends React.Component{
    render(){
        return(
            <div>
                <h1 className='center'>Tooltip Positioning</h1>
                <SelectMenu />
            </div>  
        );
    }
}

export default App;