import React from "react";

function Sidebar(props){
    return(
        <div className='sidebar'>
            <div className='sidebar-content'>
                
            </div>
        </div>
    );
}
export class ProfilePageBody extends React.Component{
    render(){
        return(
            <div className="profile-page-body">
                <div className="page-content profile-page-content">
                    <Sidebar />
                </div>
            </div>
        );
    }
}