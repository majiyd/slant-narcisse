import React from 'react';

function MainHeaderBorder(props){
	return <div className='main-header-border'></div>
}
function MainHeaderContent(props){
	return (
		<div className='page-content main-header-content'>
			<div className='main-header-section'>
				<a className='main-header-home-link'>
					<img className='main-header-logo' 
						src='https://www.slant.co/images/logo.svg' 
						alt='logo'
					/>
				</a>
			</div>
			<div className='main-header-section flex-grow-1'></div>
			<div className='main-header-section'></div>
		</div>
	)
}
function MainHeader(props){
	return (
		<div className='main-header'>
			<MainHeaderBorder />
			<MainHeaderContent />
		</div>
	)
}
function ProfilePageHeader(props){
	return <div ></div>
}

export class Header extends React.Component{
	render(){
		return (
			<div className='profile-page-header'>
				
				<MainHeader />
				<ProfilePageHeader />
			</div>
		);
	}
}