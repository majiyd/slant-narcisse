import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/header.css';
import "./styles/profilePage.css";
import "./styles/homePage.css";
import "./styles/recCard.css";
import "./styles/questionCard.css";
import {Header} from './components/header.js'
import {ProfilePageBody} from './components/profilePageBody.js';
import HomePage from './components/homePage'

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
class Home extends React.Component{
	render(){
		return(<HomePage />)
	}
}
ReactDOM.render(<Home />,document.getElementById('root'));
