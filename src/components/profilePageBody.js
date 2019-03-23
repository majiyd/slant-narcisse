import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack, faPlusCircle, faCaretDown, faTimes} from '@fortawesome/free-solid-svg-icons';

function Sidebar(props){
    return (
      <div className="sidebar hide-mobile">
        <div className="sidebar-content">
          <div className="sidebar-section">
            <a className="sidebar-link selected" href="#"> Recs (1)</a>
            <a className="sidebar-link" href="#"> Karma</a>
            <a className="sidebar-link" href="#"> Activity</a>
          </div>
        </div>
      </div>
    );
}
class MobileNavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {isMobileNavSelectVisible: false}
        this.toggleMobileNavbar = this.toggleMobileNavbar.bind(this)
    }
    toggleMobileNavbar(){
        this.setState({isMobileNavSelectVisible: !this.state.isMobileNavSelectVisible})
    }
    render(){
        return(
            <div className="mobile-navbar show-mobile">
                <a className="mobile-navbar-link" href="#" onClick={this.toggleMobileNavbar}>KARMA
                    <FontAwesomeIcon 
                        className='icon mobile-navbar-dropdown-link-icon' 
                        icon={faCaretDown} 
					/>
                </a>
                {this.state.isMobileNavSelectVisible ? 
                    <div className="mobile-nav-select-wrapper">
                        <div className="mobile-nav-select">
                            <h4 className="mobile-nav-select-title" >Select Section</h4>
                            <FontAwesomeIcon
                                className='icon times mobile-nav-close-icon close'
                                icon={faTimes}
                                onClick={this.toggleMobileNavbar}
                            />
                        </div>
                        
                        <div className="mobile-nav-select-links">
                            <div className="mobile-nav-select-link-item">RECS</div>
                            <div className="mobile-nav-select-link-item">KARMA</div>
                            <div className="mobile-nav-select-link-item">ACTIVITIES</div>
                        </div>             
                    </div>  : ""
                }
            </div>
        )
    }
}
function NoRecs(props){
    return (
      <div className="empty-state compact">
        <div className="empty-state-icon">
          <FontAwesomeIcon
            className="icon thumbtack-icon"
            icon={faThumbtack}
          />
        </div>
        <span >No pinned recommendations yet!</span>
      </div>
    );
}
function Rec (props){
    return (
      <div className="rec card-list-item image-list-item">
        <a className="rec-card-option-content" href="#">
          <div className="rec-image">
            <div className="rec-pin-link">
              <FontAwesomeIcon
                className="icon thumbtack-icon-sm"
                icon={faThumbtack}
              />
            </div>
          </div>
          <div className="rec-card-header">Python</div>
        </a>
        <a className="rec-question-link" href="#">
          <div className="rec-card-subheader secondary-detailed-header">
            In The Question
          </div>
          <div className="rec-card-text">
            What is the best language to learn/practice data structures?
          </div>
        </a>
      </div>
    );
}
function RecsView(props){
    return(
        <div className="profile-page-recs-view">
            <div className="pinned-recs card-list">
                <div className="profile-page-title card-list-section-label">
                    MY PINNED RECS (0)
                </div>
                <div className="view-section">
                    <NoRecs />
                </div>
            </div>
            <div className="other-recs card-list">
                <div className="view-section">
                    <div className="profile-page-title card-list-section-label">
                        MY OTHER RECS (1)
                    </div>
                    <Rec />
                </div>  
            </div>
        </div>
    )
}
function KarmaItem(props){
    return (
        <div className='activity-list-item'>
            <h3 className="activity-list-question-title">
                <a href="#">What is the best language to learn/practice data structures?</a>
            </h3>
            <div className="karma-activity-body">
                <div className="karma-activity-event" >
                    <div>
                        <div className="event">
                            <div className="event-avatar">
                                <FontAwesomeIcon
                                    className="icon plus-circle-icon"
                                    icon={faPlusCircle}
                                />
                            </div>
                            <div className="Event-Content">
                                <a rel="nofollow" href="#">You added the <span >con </span><strong>Interpreted language</strong> to <strong>Python</strong>.
                                </a>
                                <span className="event-time">a day ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="karma-activity-bonus-count hide-minimum">+10</div>
            </div>
        </div>
    )
}
function KarmaView(props) {
    return(
        <div className="profile-page-karma-view">
            <div className="card-list contained">
                <div className="view-section">
                    <div className="profile-page-title card-list-section-label">Karma</div>
                    <div className="card-list-item activity-card-list">
                        <KarmaItem />
                        <KarmaItem />
                        <KarmaItem />
                        <KarmaItem />
                    </div>
                </div>
            </div>
        </div>
    )
}
function ActivityItem(props){
    return(
        <div className="activity-list-item">
            <h3 className="activity-list-question-title">
                <a href="#">What is the best language to learn/practice data structures?</a>
            </h3>
            <div className="karma-activity-body">
                <div className="karma-activity-event" >
                    <div>
                        <div className="event">
                            <div className="event-avatar">
                                <a className="avatar big"  href="#">
                                    <img  src="https://avatars.slant.co/identicons/50/9d224d3f-bc09-59d6-a6cc-de77c2b6d660" alt="opeyemi suleiman" />
                                </a>
                            </div>
                            <div className="event-content">
                                <a rel="nofollow" href="#">Opeyemi added the <span >con </span><strong>Interpreted language</strong> to <strong>Python</strong>.
                                </a>
                                <span className="event-time">a day ago</span>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
    )
}
function ActivityView(props) {
    return(
        <div className="profile-page-activity-view">
            <div className="card-list contained">
                <div className="view-section">
                <div className="profile-page-title card-list-section-label">Activity</div>
                    <div className="card-list-item activity-card-list">
                        <ActivityItem />
                        <ActivityItem />
                        <ActivityItem />
                        <ActivityItem />
                        <ActivityItem />
                    </div>
                </div>
            </div>
        </div>
    )
}
export class ProfilePageBody extends React.Component{
    render(){
        return(
            <div className="profile-page-body">
                <MobileNavBar />
                <div className="page-content profile-page-content">
                    <Sidebar />
                    <div className='profile-sections-wrapper'>
                        <RecsView />
                        {/* <KarmaView/>  */}
                        {/* <ActivityView /> */}
                    </div>
                </div>
            </div>
        );
    }
}