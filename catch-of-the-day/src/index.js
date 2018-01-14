import React from 'react';
import {render} from 'react-dom';
//imports the render method instead of the entire react-dom package
import StorePicker from './components/StorePicker';

render(<StorePicker/>, document.querySelector('#main'));

//document.querySelector returns the first Elements that matches id of main or group of them