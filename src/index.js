import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/header.css';
import {Header} from './components/header.js'

class Profile extends React.Component{
	render(){
		return(
			<div className='profile-page'>
				<Header />
			</div>
		);
	}
}

ReactDOM.render(
  <Profile />,
  document.getElementById('root')
);
