import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretDown, faTrophy, faComment,faExpandArrowsAlt} from '@fortawesome/free-solid-svg-icons'

function CardStats(props){
    return(
        <div>
            <div className="card-list-stats">     
                <div className=" card-list-stats-item">
                    <a href="#">179 Recs</a>
                </div>
                <div className="card-list-stats-seperator">•</div>
                <span>
                    <div className=" card-list-stats-item ">
                        <a href="#">Gaming</a>
                    </div>
                    <div className=" card-list-stats-item ">
                        <a href="#">PC</a>
                    </div>
                    <div className=" card-list-stats-item ">
                        <a href="#">PC Games</a>
                    </div>
                </span>
            </div>
        </div>
    )
}
function CardComment(props){
    return(
        <div className=" rec-card-comment ">
            <div className="rec-card-comment-avatar avatar big">
                <img
                    className="show-loggedin"
                    src="https://avatars.slant.co/identicons/300/9d224d3f-bc09-59d6-a6cc-de77c2b6d660"
                    alt="opeyemi suleiman"
                />
            </div>
            <div className="rec-card-comment-input-container">
                <textarea
                    className="rec-card-comment-input"
                    placeholder="Add a comment..."
                />
                <a className=" rec-card-comment-input-submit disabled">
                    Post
                </a>
            </div>
        </div>
    )
}
function CardContent (props){
    return (
        <div className=" rec-card-content">
            <a className="community-recommendation-body">
                <div className=" community-recommendation-rec-text  community-recommendation-body-testimonial">
                    game
                </div>
            </a>
            <div className="community-recommendation-rec-footer">
                <div className=" community-recommendation-rec-reaction-button">
                    <a className="reaction-button-set-link">
                        <button className=" reaction-button has-text">
                            <FontAwesomeIcon
                                className="icon icon-trophy reaction-button-icon"
                                icon={faTrophy}
                            />
                            <span className="reaction-button-text">
                                Helpful
                            </span>
                        </button>
                    </a>
                </div>
                <a className="community-recommendation-rec-footer-link">
                    <FontAwesomeIcon
                        className="icon icon-comment community-recommendation-rec-footer-comments-icon"
                        icon={faComment}
                    />
                </a>
                <a className="community-recommendation-rec-footer-link community-recommendation-rec-expand-link">
                    <FontAwesomeIcon
                        className="icon icon-expand "
                        icon={faExpandArrowsAlt}
                    />
                    <span>See full</span>
                </a>
            </div>
            <div className="card-list-seperator" />
        </div>
    );
}
function CardImageContent(props){
    return (
        <div className="rec-card-image-content">
            <div className="rec-card-user-rec">
                <div className="rec-card-user-rec-avatar">
                    <a className=" avatar hide-mobile bigger" href="#">
                        <img src="https://avatars.slant.co/identicons/200/5489d323-d67e-42a9-90b7-71678712aeb8" alt="RationalMarduk"/>
                    </a>
                    <a className="avatar show-mobile big" href="#">
                        <img src="https://avatars.slant.co/identicons/50/5489d323-d67e-42a9-90b7-71678712aeb8" alt="RationalMarduk"/>
                    </a>
                </div>
                <div className="rec-card-user-rec-content">
                    <div className="rec-card-user-rec-content-header">
                        RationalMarduk recommends
                    </div>
                    <a className=" rec-card-Title" href="#" title="Xonotic">
                        Xonotic
                    </a>
                </div>
            </div>
        </div>
    )
}
function CardQuestionHeader (props){
    const caretIconSpanStyle = {
        backgroundColor: "white",
        borderRadius: "50%",
        color: "#1b9ad1",
        padding: "0px 4px",
        marginLeft: 6,
        marginRight: -4,
        fontSize: "medium"
    };
    return(
        <div className="rec-card-question-header">
            <CardStats />
            <div className="rec-card-question-header-flex">
                <h4 className="rec-card-question-title rec-card-question-header-content">
                    <a href="#">
                        What are the best free full offline games for PC that have good graphics?
                    </a>
                </h4>
                <div className="rec-card-question-header-button">
                    <a className="FAB micro">
                        <span className="FAB-label">I Rec...
                            <span style={caretIconSpanStyle}>
                                <FontAwesomeIcon
                                    className='icon icon-caret-down FAB-icon'
                                    icon={faCaretDown}
                                />
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}
function CardImage (props){
    const cardImageStyle = {
        backgroundImage:
            "url('https://cdn.slant.co/447c8db4-326f-4853-b4c8-42346fc3c897/-/format/jpeg/-/progressive/yes/-/preview/480x480/')"
    }
    return (
        <div
            className="rec-card-image images-image-list-item-image"
            style={cardImageStyle}
        >
            <div className="rec-card-image-gradient">
                <a className="rec-card-image-link" href="#" title="Xonotic" rel="nofollow"/>
                <CardImageContent />
            </div>
        </div>
    );
}
export default class RecCard extends React.Component {
    render() {
        return (
            <div className="rec-card card-list-item has-footer">
                <CardQuestionHeader />
                <CardImage />
                <div>
                    <CardContent />
                    <CardComment />
                </div>
            </div>
        );
    }
}
