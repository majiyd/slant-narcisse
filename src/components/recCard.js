import React from "react";
function CardStats(props){
    return(
        <div>
            <div className="CardList-Stats">     
                <div className=" CardList-Stats-Item">
                    <a href="#">179 Recs</a>
                </div>
                <div className="CardList-Stats-Seperator">•</div>
                <span>
                    <div className=" CardList-Stats-Item ">
                        <a href="#">Gaming</a>
                    </div>
                    <div className=" CardList-Stats-Item ">
                        <a href="#">PC</a>
                    </div>
                    <div className=" CardList-Stats-Item ">
                        <a href="#">PC Games</a>
                    </div>
                </span>
            </div>
        </div>
    )
}
function CardComment(props){
    return(
        <div className=" rec-card-Comment ">
            <div className="rec-card-Comment-Avatar Avatar big">
                <img
                    className="show-loggedin"
                    src="https://avatars.slant.co/identicons/300/9d224d3f-bc09-59d6-a6cc-de77c2b6d660"
                    alt="opeyemi suleiman"
                />
                {/* <svg className="Icon user show-loggedout"></svg> */}
            </div>
            <div className="rec-card-Comment-InputContainer">
                <textarea
                    className="rec-card-Comment-Input"
                    placeholder="Add a comment..."
                />
                <a className=" rec-card-Comment-Input-Submit hidden disabled">
                    Post
                </a>
            </div>
        </div>
    )
}
function CardContent (props){
    return(
        <div className=" rec-card-Content">
            <a className="CommunityRecommendation-Body">
                <div className=" CommunityRecommendation-Rec-Text CommunityRecommendation-Body-Testimonial">
                    game
                            </div>
            </a>
            <div className="CommunityRecommendation-Rec-Footer">
                <div className=" CommunityRecommendation-Rec-ReactionButton">
                    <a className=" ReactionButtonSet-Link">
                        <button className=" ReactionButton hasText">
                            {/* <svg className="Icon trophy ReactionButton-Icon"></svg> */}
                            <span className="ReactionButton-Text">
                                Helpful
                                        </span>
                        </button>
                    </a>
                </div>
                <a className="CommunityRecommendation-Rec-Footer-Link">
                    {/* <svg className="Icon comment CommunityRecommendation-Rec-Footer-Comments-Icon"></svg> */}
                </a>
                <a className="CommunityRecommendation-Rec-Footer-Link CommunityRecommendation-Rec-ExpandLink">
                    {/* <svg className="Icon expand _has-more-content CommunityRecommendation-Rec-ExpandLink-Icon"></svg> */}
                    <span>See full</span>
                </a>
            </div>
            <div className="CardList-Seperator" />
        </div>
    )
}
function CardImageContent(props){
    return (
        <div className="rec-card-Image-Content">
            <div className="rec-card-UserRec">
                <div className="rec-card-UserRec-Avatar">
                    <a className=" Avatar hide-mobile bigger" href="#">
                        <img src="https://avatars.slant.co/identicons/200/5489d323-d67e-42a9-90b7-71678712aeb8" alt="RationalMarduk"/>
                    </a>
                    <a className="Avatar show-mobile big" href="#">
                        <img src="https://avatars.slant.co/identicons/50/5489d323-d67e-42a9-90b7-71678712aeb8" alt="RationalMarduk"/>
                    </a>
                </div>
                <div className="rec-card-UserRec-Content">
                    <div className="rec-card-UserRec-Content-RecHeader">
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
    return(
        <div className="rec-card-question-header">
            <CardStats />
            <div className="rec-card-question-header-Flex">
                <h4 className="rec-card-question-title rec-card-question-header-Content">
                    <a href="#">
                        What are the best free full offline games for PC that have good graphics?
                            </a>
                </h4>
                <div className="rec-card-question-header-Button">
                    <a className="FAB micro">
                        <span className="FAB-Label">I Rec...</span>
                        {/* <svg className="Icon caret-circle-down-solid FAB-Icon"></svg> */}
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
    return(
        <div className="rec-card-Image Images-ImageList-Item-Image" style={cardImageStyle}>
            <div className="rec-card-Image-Gradient">
                <a href="#" title="Xonotic" rel="nofollow" />
                <CardImageContent />
            </div>
        </div>
    )
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
