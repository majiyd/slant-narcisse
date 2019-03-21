import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';

function Sidebar(props){
    return (
      <div className="sidebar">
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
function RecsView(props){
    return(
        <div className="profile-page-recs-view">
            <div className="pinned-recs card-list">
                <div className="profile-page-title card-list-section-label">
                    MY PINNED RECS (0)
                </div>
                <div className="recs-view-section">
                    <NoRecs />
                </div>
            </div>
        </div>
    )
}
function KarmaView(props) {

}
function ActivityView(props) {

}
export class ProfilePageBody extends React.Component{
    render(){
        return(
            <div className="profile-page-body">
                <div className="page-content profile-page-content">
                    <Sidebar />
                    <div className='profile-sections-wrapper'>
                        <RecsView />
                    </div>
                </div>
            </div>
        );
    }
}