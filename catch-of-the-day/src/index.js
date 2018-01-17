import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';

import './css/style.css';
import App from './components/App';
//imports the render method instead of the entire react-dom package
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = ()=> {
    return(
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component ={StorePicker}/>
                 <Match exactly pattern="/store/:storeId" component ={App}/>
                 <Miss component={NotFound}/>
             </div>
        </BrowserRouter>
    )
} //when the pattern is exactly forward slash meaning when I am exactly on the home page which component should i show?

//match can be used anywhere

render(<Root/>, document.querySelector('#main'));

//document.querySelector returns the first Elements that matches id of main or group of them