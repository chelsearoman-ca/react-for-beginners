import React from 'react';
import {getFunName} from '../helpers.js';

class StorePicker extends React.Component{
    goToStore(e){
        e.preventDefault();
        console.log('you changed the URL');
        //first grab the text from the box
        //second we're going ot transition from ./ to .storeId
    }
    render(){
        //any where else
        return(
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
                <button type="submit">Visit Store →</button>
            </form>
        )
    }
}

export default StorePicker;