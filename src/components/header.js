import React from 'react';

function MainHeaderBorder(props){
	return <div className='main-header-border'></div>
}
function MainHeaderContent(props){
	return (
		<div className='page-content main-header-content'>
			<div classList='main-header-section'>
				
			</div>
			<div classList='main-header-section flex-grow-1'></div>
			<div classList='main-header-section'></div>
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