import React from 'react'
import {MainHeader} from "./header.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch } from '@fortawesome/free-solid-svg-icons'

function HomePageHeader(props){
    return(
        <div className="home-page-view">
            <div className="tag-selector-header">
                <div className="tag-selector-tag-builder page-content">
                    <div className="tag-selector-tag-builder-content">
                        <div className="tag-selector-tag-builder-section">
                            <div className="tag-selector-tag-builder-label">Subscribed Tags</div>
                            <div className=" tag-selector-search">
                                <FontAwesomeIcon
                                    className='icon tag-selector-search-icon'
                                    icon={faSearch}
                                />
                                <input className="tag-selector-search-input" type="text" placeholder="Search for a tag, e.g. Electronics, Gaming, Productivity" />
                            </div>
                            <div>
                                <div className="tag-selector-tag-builder-copy" >
                                    Customize your Recommendation Feed to get started on Slant. Find what you love and get help with what you need.
                                </div>
                            </div>
                        </div>
                        <div className="tag-selector-tag-builder-section">
                            <div className="tag-selector-tag-builder-label">Suggested Tags</div>
                            <div className="tag-selector-tag-builder-list suggested">
                                <span className="tag-selector-tag">Development</span>
                                <span className="tag-selector-tag">Game Development</span>
                                <span className="tag-selector-tag">Web </span>
                                <span className="tag-selector-tag">Development</span>
                                <span className="tag-selector-tag">Development</span>
                                <span className="tag-selector-tag">Development</span>
                                <span className="tag-selector-tag">Development</span>
                                <span className="tag-selector-tag">Game Development</span>
                                <span className="tag-selector-tag">Development</span>
                                <span className="tag-selector-tag">Development</span>
                            </div>
                        </div>
                    </div>
                    <div className="tag-selector-tag-builder-submit">
                        <button className="text-button">Cancel</button>
                        <button className="primary-button">Save</button>
                    </div>
                </div>              
            </div>
        </div>
    )
}
function NavSideBar(props){
    return(
        <div className="nav-sidebar left">
            <div className="nav-sidebar-content">
                <div className="nav-sidebar-section">
                    <a className="nav-sidebar-link selected" href="#">Recommendations</a>
                    <a className="nav-sidebar-link" href="#">Questions</a>
                    <a className=" nav-sidebar-link" href="#">Top</a>
                    <a className="nav-sidebar-link" href="#">Improve</a>
                </div>
            </div>
        </div>
    )
}
function HomePageView(props){
    return(
        <div className="home-page-view">
            <div className="nav-header scrollable show-mobile" >
                <div className="nav-header-content page-content">
                    <div className="nav-header-list">
                        <a className="nav-header-item selected" href="#">Recommendations</a>
                        <a className=" nav-header-item" href="#">Questions</a>
                        <a className=" nav-header-item" href="#">Top</a>
                        <a className=" nav-header-item" href="#">Improve</a>
                    </div>
                </div>
            </div>
            <div>
                <div className="page-content">
                    <NavSideBar />
                </div>
            </div>
        </div>
    );
}
export default class HomePage extends React.Component{
    render(){
        return(
            <div className="home-page">
                <MainHeader />
                <HomePageHeader />
                <HomePageView />
            </div>
        )
    }
}