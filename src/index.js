import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/header.css';
import "./styles/profilePage.css";
import {Header} from './components/header.js'
import {ProfilePageBody} from './components/profilePageBody.js';

class Profile extends React.Component{
	render(){
		return(
			<div className='profile-page'>
				<Header />
				<ProfilePageBody />
			</div>
		);
	}
}

ReactDOM.render(
  <Profile />,
  document.getElementById('root')
);
