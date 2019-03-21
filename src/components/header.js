import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faSearch, faBell, faCrown } from '@fortawesome/free-solid-svg-icons'

function  HeaderForm(props){
	return(
		<form className='main-header-search-form'>
			<a href='#' className='main-header-search-icon'>
				<FontAwesomeIcon
					className='icon search-icon' 
					icon={faSearch} 
				/>
			</a>
			<input className="main-header-search-input"  placeholder="What are the best..." type='search'autoComplete="off" />
		</form>
	);
}
function ProfileHeaderStat(props){
	return(
		<div className="profile-page-header-user-stat">
			<div className="profile-page-header-user-stat-count">{props.statCount}</div>
			<div className="profile-page-header-user-stat-text">{props.statText}</div>	
		</div>
	);
}
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
				<a className='main-header-dropdown-link'>
					<FontAwesomeIcon 
						className='icon main-header-dropdown-link-icon' 
						icon={faCaretDown} 
					/>
				</a>
			</div>
			<div className='main-header-section main-header-search hide-minimum'>
				<HeaderForm />
			</div>
			<div className='main-header-section'>
				<div className='main-header-user-section'>
					<a href='#' className='main-header-icon-link hide-tablet'>
						<div className='main-header-icon-wrapper'>
							<FontAwesomeIcon 
								className='icon main-header-icon icon-bell' 
								icon={faBell} 
							/>
						</div>
					</a>
					<a href='#' className='main-header-icon-link has-text hide-tablet'>
						<div className='main-header-icon-wrapper'>
							<FontAwesomeIcon 
								className='icon main-header-icon icon-crown' 
								icon={faCrown} 
							/>
						</div>
						<div className="main-header-icon-text">50</div>
					</a>
					<div className="main-header-profile-link">
						<a href="#" className="main-header-profile avatar">
							<img src="https://avatars.slant.co/identicons/200/9d224d3f-bc09-59d6-a6cc-de77c2b6d660" className="user-image" alt="avatar"/>
						</a>		
					</div>
				</div>
			</div>
			<a href="#" className="main-header-link-button hide-mobile"><button className="main-header-button primary-button">ADD QUESTION</button></a>
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
	return (
    <div className="profile-page-header-wrapper">
      <div className="page-content">
        <div className="profile-header">
          <div className="profile-page-header-avatar avatar">
            <img
              className="profile-page-header-avatar-image"
              alt="Avatar"
              src="https://avatars.slant.co/identicons/300/9d224d3f-bc09-59d6-a6cc-de77c2b6d660"
            />
			<div className="profile-page-header-user-stats hide-mobile">
				<ProfileHeaderStat statCount={1} statText={"RECS"}/>
				<ProfileHeaderStat statCount={50} statText={"KARMA"}/>
			</div>
          </div>
		  <div className="profile-page-header-content">
			<div className="profile-page-header-name">opeyemi suleiman</div>
			<div className="profile-page-header-username">@opeyemisuleiman</div>
            <div className="profile-page-header-edit-links">
                <a className="" href="#">Update profile</a>
                <span className="link-seperator"></span>
                <a className="" href="#">Update image</a>
            </div>
            <div className="profile-page-header-bio">
                <div className="profile-page-header-bio-content">
                    I’ve been an awesome Slanter since March 19th, 2019!
                </div>
            </div>
		  </div>
		</div>
      </div>
    </div>
  );
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